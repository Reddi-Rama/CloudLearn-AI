import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";
import { AuthRequest } from "../../middleware/auth.middleware";
import { certificateService } from "./certificate.service";
import { generateCertificate as generateCertificatePdf } from "../../generators/certificate.generator";

const prisma = new PrismaClient();

export async function generateCertificate(
  req: AuthRequest,
  res: Response
) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const courseSlug = String(
      req.body?.courseSlug || ""
    ).trim();

    const courseTitle = String(
      req.body?.courseTitle || ""
    ).trim();

    if (!courseSlug) {
      return res.status(400).json({
        success: false,
        message: "Course slug is required",
      });
    }

    const certificate =
      await certificateService.generate(
        userId,
        courseSlug,
        courseTitle || undefined
      );

    return res.status(200).json({
      success: true,
      message: "Certificate available",
      data: certificate,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to generate certificate";

    const status =
      message.includes("Authentication")
        ? 401
        : message.includes(
            "Certificate unavailable"
          )
          ? 403
          : message.includes("User not found")
            ? 404
            : 400;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function getMyCertificates(
  req: AuthRequest,
  res: Response
) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const certificates =
      await certificateService.getUserCertificates(
        userId
      );

    return res.status(200).json({
      success: true,
      data: certificates,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch certificates";

    return res.status(400).json({
      success: false,
      message,
    });
  }
}

export async function verifyCertificate(
  req: Request,
  res: Response
) {
  try {
    const certificateId = String(
      req.params.certificateId || ""
    ).trim();

    if (!certificateId) {
      return res.status(400).json({
        success: false,
        message: "Certificate ID is required",
      });
    }

    const certificate =
      await certificateService.verifyCertificate(
        certificateId
      );

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
        data: {
          valid: false,
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Certificate verified successfully",
      data: certificate,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to verify certificate";

    return res.status(400).json({
      success: false,
      message,
    });
  }
}

/**
 * Resolve the physical certificate PDF safely.
 *
 * Older certificate records may contain an absolute Windows
 * path from another machine. The actual certificate storage
 * location belongs to the current backend process, so when
 * the stored path no longer exists we fall back to the
 * certificate storage directory using the certificate ID.
 */
function resolveCertificateFilePath(
  storedFilePath: string | null | undefined,
  certificateId: string
) {
  if (
    storedFilePath &&
    fs.existsSync(storedFilePath)
  ) {
    return storedFilePath;
  }

  const storageDirectory = path.join(
    process.cwd(),
    "storage",
    "certificates"
  );

  const currentStoragePath = path.join(
    storageDirectory,
    `${certificateId}.pdf`
  );

  if (fs.existsSync(currentStoragePath)) {
    return currentStoragePath;
  }

  return null;
}

export async function downloadCertificate(
  req: Request,
  res: Response
) {
  try {
    const certificateId = String(
      req.params.certificateId || ""
    ).trim();

    if (!certificateId) {
      return res.status(400).json({
        success: false,
        message: "Certificate ID is required",
      });
    }

    const certificate =
      await prisma.certificate.findUnique({
        where: {
          certificateId,
        },
        include: {
          user: {
            select: {
              fullName: true,
            },
          },
        },
      });

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    /* Always regenerate using the latest certificate design. */
    const filePath =
      await generateCertificatePdf({
        studentName: certificate.user.fullName,
        courseTitle: certificate.courseTitle,
        certificateId: certificate.certificateId,
        issueDate:
          new Date(
            certificate.issuedAt
          ).toLocaleDateString("en-IN"),
      });

    return res.download(
      filePath,
      `${certificate.certificateId}.pdf`,
      (error) => {
        if (
          error &&
          !res.headersSent
        ) {
          return res.status(404).json({
            success: false,
            message:
              "Unable to download certificate",
          });
        }

        return undefined;
      }
    );
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to download certificate";

    if (!res.headersSent) {
      return res.status(404).json({
        success: false,
        message,
      });
    }
  }

}

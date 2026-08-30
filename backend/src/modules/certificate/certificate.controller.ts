import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { certificateService } from "./certificate.service";
import fs from "fs";

/**
 * Generate certificate
 */
export async function generateCertificate(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { courseSlug, courseTitle } = req.body;

    if (!courseSlug || !courseTitle) {
      return res.status(400).json({
        success: false,
        message:
          "courseSlug and courseTitle are required",
      });
    }

    const certificate =
      await certificateService.generate(
        req.user.userId,
        courseSlug,
        courseTitle
      );

    return res.status(201).json({
      success: true,
      message: "Certificate generated successfully",
      data: certificate,
    });
  } catch (error) {
    console.error(
      "Generate certificate error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Certificate generation failed",
    });
  }
}

/**
 * Get certificates of logged-in user
 */
export async function getMyCertificates(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const certificates =
      await certificateService.getUserCertificates(
        req.user.userId
      );

    return res.status(200).json({
      success: true,
      message: "Certificates fetched successfully",
      data: certificates,
    });
  } catch (error) {
    console.error(
      "Get certificates error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to fetch certificates",
    });
  }
}

/**
 * Download certificate PDF
 */
export async function downloadCertificate(
  req: Request,
  res: Response
) {
  try {
    const { certificateId } = req.params;

    if (!certificateId) {
      return res.status(400).json({
        success: false,
        message: "Certificate ID is required",
      });
    }

    const certificate =
      await certificateService.findByCertificateId(
        certificateId
      );

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    const filePath = certificate.filePath;

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "Certificate file not found",
      });
    }

    return res.download(
      filePath,
      `${certificate.certificateId}.pdf`
    );
  } catch (error) {
    console.error(
      "Download certificate error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to download certificate",
    });
  }
}
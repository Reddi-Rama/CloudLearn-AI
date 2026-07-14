import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { certificateService } from "./certificate.service";
import fs from "fs";
import path from "path";
export async function generateCertificate(
    
  req: AuthRequest,
  res: Response
)

{
  try {
    const { courseSlug, courseTitle } = req.body;

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const certificate = await certificateService.generate(
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
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Certificate generation failed",
    });
  }
}
export async function downloadCertificate(
  req: Request,
  res: Response
) {
  try {
    const { certificateId } = req.params;

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
    return res.status(500).json({
      success: false,
      message: "Unable to download certificate",
    });
  }
}
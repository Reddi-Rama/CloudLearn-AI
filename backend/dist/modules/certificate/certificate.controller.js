"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificate = generateCertificate;
exports.getMyCertificates = getMyCertificates;
exports.verifyCertificate = verifyCertificate;
exports.downloadCertificate = downloadCertificate;
const client_1 = require("@prisma/client");
const certificate_service_1 = require("./certificate.service");
const prisma = new client_1.PrismaClient();
async function generateCertificate(req, res) {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const courseSlug = String(req.body?.courseSlug || "").trim();
        const courseTitle = String(req.body?.courseTitle || "").trim();
        if (!courseSlug) {
            return res.status(400).json({
                success: false,
                message: "Course slug is required",
            });
        }
        const certificate = await certificate_service_1.certificateService.generate(userId, courseSlug, courseTitle || undefined);
        return res.status(200).json({
            success: true,
            message: "Certificate available",
            data: certificate,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to generate certificate";
        const status = message.includes("Authentication")
            ? 401
            : message.includes("Certificate unavailable")
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
async function getMyCertificates(req, res) {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const certificates = await certificate_service_1.certificateService.getUserCertificates(userId);
        return res.status(200).json({
            success: true,
            message: "Certificates fetched successfully",
            data: certificates,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to fetch certificates";
        return res.status(400).json({
            success: false,
            message,
        });
    }
}
/**
 * Public certificate verification.
 *
 * GET /api/v1/certificate/verify/:certificateId
 */
async function verifyCertificate(req, res) {
    try {
        const certificateId = String(req.params.certificateId || "").trim();
        if (!certificateId) {
            return res.status(400).json({
                success: false,
                message: "Certificate ID is required",
            });
        }
        const certificate = await certificate_service_1.certificateService.verifyCertificate(certificateId);
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
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to verify certificate";
        return res.status(400).json({
            success: false,
            message,
        });
    }
}
async function downloadCertificate(req, res) {
    try {
        const certificateId = String(req.params.certificateId || "").trim();
        if (!certificateId) {
            return res.status(400).json({
                success: false,
                message: "Certificate ID is required",
            });
        }
        const certificate = await prisma.certificate.findUnique({
            where: {
                certificateId,
            },
        });
        if (!certificate) {
            return res.status(404).json({
                success: false,
                message: "Certificate not found",
            });
        }
        return res.download(certificate.filePath, `${certificate.certificateId}.pdf`, (error) => {
            if (error &&
                !res.headersSent) {
                return res.status(404).json({
                    success: false,
                    message: "Certificate file not found",
                });
            }
            return undefined;
        });
    }
    catch (error) {
        const message = error instanceof Error
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
//# sourceMappingURL=certificate.controller.js.map
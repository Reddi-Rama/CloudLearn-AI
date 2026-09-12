"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificate = generateCertificate;
exports.getMyCertificates = getMyCertificates;
exports.downloadCertificate = downloadCertificate;
const client_1 = require("@prisma/client");
const certificate_service_1 = require("./certificate.service");
const prisma = new client_1.PrismaClient();
/**
 * POST /api/v1/certificate/generate
 *
 * A certificate can only be generated when the authenticated
 * user has passed the final exam for the requested course.
 */
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
        let status = 400;
        if (message.includes("Authentication")) {
            status = 401;
        }
        else if (message.includes("Certificate unavailable")) {
            status = 403;
        }
        else if (message.includes("User not found")) {
            status = 404;
        }
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
/**
 * GET /api/v1/certificate
 *
 * Get certificates belonging to the logged-in user.
 */
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
 * GET /api/v1/certificate/download/:certificateId
 *
 * Download a certificate PDF.
 *
 * This route remains public because certificate verification
 * can be performed using the certificate ID.
 */
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
            if (error && !res.headersSent) {
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
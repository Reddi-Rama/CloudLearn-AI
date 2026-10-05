"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificate = generateCertificate;
exports.getMyCertificates = getMyCertificates;
exports.verifyCertificate = verifyCertificate;
exports.downloadCertificate = downloadCertificate;
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const certificate_service_1 = require("./certificate.service");
const certificate_generator_1 = require("../../generators/certificate.generator");
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
/**
 * Resolve the physical certificate PDF safely.
 *
 * Older certificate records may contain an absolute Windows
 * path from another machine. The actual certificate storage
 * location belongs to the current backend process, so when
 * the stored path no longer exists we fall back to the
 * certificate storage directory using the certificate ID.
 */
function resolveCertificateFilePath(storedFilePath, certificateId) {
    if (storedFilePath &&
        fs_1.default.existsSync(storedFilePath)) {
        return storedFilePath;
    }
    const storageDirectory = path_1.default.join(process.cwd(), "storage", "certificates");
    const currentStoragePath = path_1.default.join(storageDirectory, `${certificateId}.pdf`);
    if (fs_1.default.existsSync(currentStoragePath)) {
        return currentStoragePath;
    }
    return null;
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
        const filePath = await (0, certificate_generator_1.generateCertificate)({
            studentName: certificate.user.fullName,
            courseTitle: certificate.courseTitle,
            certificateId: certificate.certificateId,
            issueDate: new Date(certificate.issuedAt).toLocaleDateString("en-IN"),
        });
        return res.download(filePath, `${certificate.certificateId}.pdf`, (error) => {
            if (error &&
                !res.headersSent) {
                return res.status(404).json({
                    success: false,
                    message: "Unable to download certificate",
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
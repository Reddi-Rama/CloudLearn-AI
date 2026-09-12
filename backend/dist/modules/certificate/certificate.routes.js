"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const certificate_controller_1 = require("./certificate.controller");
const router = (0, express_1.Router)();
/**
 * GET
 * /api/v1/certificate
 *
 * Get certificates belonging to logged-in user
 */
router.get("/", auth_middleware_1.authenticate, certificate_controller_1.getMyCertificates);
/**
 * POST
 * /api/v1/certificate/generate
 *
 * Generate a new certificate
 */
router.post("/generate", auth_middleware_1.authenticate, certificate_controller_1.generateCertificate);
/**
 * GET
 * /api/v1/certificate/download/:certificateId
 *
 * Download certificate PDF
 */
router.get("/download/:certificateId", certificate_controller_1.downloadCertificate);
exports.default = router;
//# sourceMappingURL=certificate.routes.js.map
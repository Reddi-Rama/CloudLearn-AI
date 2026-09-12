"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const certificate_controller_1 = require("./certificate.controller");
const router = (0, express_1.Router)();
router.get("/", auth_middleware_1.authenticate, certificate_controller_1.getMyCertificates);
router.post("/generate", auth_middleware_1.authenticate, certificate_controller_1.generateCertificate);
/*
 * Public verification endpoint.
 */
router.get("/verify/:certificateId", certificate_controller_1.verifyCertificate);
router.get("/download/:certificateId", certificate_controller_1.downloadCertificate);
exports.default = router;
//# sourceMappingURL=certificate.routes.js.map
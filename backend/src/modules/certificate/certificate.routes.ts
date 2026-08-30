import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import {
  generateCertificate,
  getMyCertificates,
  downloadCertificate,
} from "./certificate.controller";

const router = Router();

/**
 * GET
 * /api/v1/certificate
 *
 * Get certificates belonging to logged-in user
 */
router.get(
  "/",
  authenticate,
  getMyCertificates
);

/**
 * POST
 * /api/v1/certificate/generate
 *
 * Generate a new certificate
 */
router.post(
  "/generate",
  authenticate,
  generateCertificate
);

/**
 * GET
 * /api/v1/certificate/download/:certificateId
 *
 * Download certificate PDF
 */
router.get(
  "/download/:certificateId",
  downloadCertificate
);

export default router;
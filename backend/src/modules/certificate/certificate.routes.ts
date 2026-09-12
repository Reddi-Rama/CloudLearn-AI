import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import {
  generateCertificate,
  getMyCertificates,
  verifyCertificate,
  downloadCertificate,
} from "./certificate.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  getMyCertificates
);

router.post(
  "/generate",
  authenticate,
  generateCertificate
);

/*
 * Public verification endpoint.
 */
router.get(
  "/verify/:certificateId",
  verifyCertificate
);

router.get(
  "/download/:certificateId",
  downloadCertificate
);

export default router;

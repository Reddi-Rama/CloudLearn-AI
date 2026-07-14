import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import { generateCertificate ,downloadCertificate} from "./certificate.controller";

const router = Router();

router.post(
  "/generate",
  authenticate,
  generateCertificate
);
router.get(
  "/download/:certificateId",
  downloadCertificate
);

export default router;
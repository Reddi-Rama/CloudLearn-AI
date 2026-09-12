import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import { examController } from "./exam.controller";

const router = Router();

router.get(
  "/:courseSlug",
  authenticate,
  examController.getExam
);

router.post(
  "/:courseSlug/submit",
  authenticate,
  examController.submitExam
);

router.get(
  "/:courseSlug/result",
  authenticate,
  examController.getLatestResult
);

export default router;

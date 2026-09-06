import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import {
  createOrder,
  verifyPayment,
  checkEnrollment,
} from "./payment.controller";

const router = Router();

router.post(
  "/create-order",
  authenticate,
  createOrder
);

router.post(
  "/verify",
  authenticate,
  verifyPayment
);

router.get(
  "/enrollment/:courseSlug",
  authenticate,
  checkEnrollment
);

export default router;

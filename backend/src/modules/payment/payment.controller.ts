import { Response } from "express";

import type { AuthRequest } from "../../middleware/auth.middleware";
import { paymentService } from "./payment.service";

export const createOrder = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const { courseSlug } = req.body;

    if (
      typeof courseSlug !== "string" ||
      !courseSlug.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "courseSlug is required",
      });
    }

    const data =
      await paymentService.createOrder(
        userId,
        courseSlug.trim()
      );

    return res.status(201).json({
      success: true,
      message: "Payment order created",
      data,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to create payment order";

    return res.status(400).json({
      success: false,
      message,
    });
  }
};

export const verifyPayment = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = req.body;

    if (
      typeof razorpayOrderId !== "string" ||
      typeof razorpayPaymentId !== "string" ||
      typeof razorpaySignature !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Razorpay payment verification details are required",
      });
    }

    const data =
      await paymentService.verifyPayment(
        userId,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature
      );

    return res.status(200).json({
      success: true,
      message:
        "Payment verified and course unlocked",
      data,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Payment verification failed";

    return res.status(400).json({
      success: false,
      message,
    });
  }
};

export const checkEnrollment = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const courseSlugParam = req.params.courseSlug;

    if (typeof courseSlugParam !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid courseSlug",
      });
    }

    const data =
      await paymentService.checkEnrollment(
        userId,
        courseSlugParam
      );

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to check enrollment";

    return res.status(400).json({
      success: false,
      message,
    });
  }
};

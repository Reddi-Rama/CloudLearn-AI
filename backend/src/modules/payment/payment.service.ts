import crypto from "crypto";
import Razorpay from "razorpay";

import { paymentRepository } from "./payment.repository";

const COURSE_PRICE = 49;

const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

if (!razorpayKeyId || !razorpayKeySecret) {
  console.warn(
    "⚠️ Razorpay environment variables are missing."
  );
}

const razorpay = new Razorpay({
  key_id: razorpayKeyId || "",
  key_secret: razorpayKeySecret || "",
});

export const paymentService = {
  async createOrder(
    userId: string,
    courseSlug: string
  ) {
    const course =
      await paymentRepository.findCourseBySlug(
        courseSlug
      );

    if (!course) {
      throw new Error("Course not found");
    }

    const existingEnrollment =
      await paymentRepository.findEnrollment(
        userId,
        course.id
      );

    if (existingEnrollment) {
      throw new Error(
        "You are already enrolled in this course"
      );
    }

    const order = await razorpay.orders.create({
      amount: COURSE_PRICE * 100,
      currency: "INR",
      receipt: `course_${courseSlug}_${Date.now()}`,
      notes: {
        userId,
        courseSlug,
      },
    });

    const payment =
      await paymentRepository.createPayment({
        id: crypto.randomUUID(),
        userId,
        courseSlug,
        amount: COURSE_PRICE,
        razorpayOrderId: order.id,
      });

    return {
      paymentId: payment.id,
      orderId: order.id,
      amount: COURSE_PRICE,
      currency: "INR",
      keyId: razorpayKeyId,
      courseSlug,
      courseName: course.title,
    };
  },

  async verifyPayment(
    userId: string,
    razorpayOrderId: string,
    razorpayPaymentId: string,
    razorpaySignature: string
  ) {
    const payment =
      await paymentRepository.findPaymentByOrderId(
        razorpayOrderId
      );

    if (!payment) {
      throw new Error("Payment not found");
    }

    if (payment.userId !== userId) {
      throw new Error("Unauthorized payment");
    }

    if (payment.amount !== COURSE_PRICE) {
      throw new Error("Invalid payment amount");
    }

    const generatedSignature =
      crypto
        .createHmac(
          "sha256",
          razorpayKeySecret || ""
        )
        .update(
          `${razorpayOrderId}|${razorpayPaymentId}`
        )
        .digest("hex");

    if (
      generatedSignature !== razorpaySignature
    ) {
      await paymentRepository.markPaymentFailed(
        payment.id
      );

      throw new Error(
        "Payment signature verification failed"
      );
    }

    const updatedPayment =
      await paymentRepository.markPaymentSuccess(
        payment.id,
        razorpayPaymentId
      );

    const course =
      await paymentRepository.findCourseBySlug(
        payment.courseSlug
      );

    if (!course) {
      throw new Error("Course not found");
    }

    const enrollment =
      await paymentRepository.createEnrollment(
        userId,
        course.id
      );

    return {
      payment: updatedPayment,
      enrollment,
      course: {
        id: course.id,
        title: course.title,
        slug: course.slug,
      },
    };
  },

  async checkEnrollment(
    userId: string,
    courseSlug: string
  ) {
    const course =
      await paymentRepository.findCourseBySlug(
        courseSlug
      );

    if (!course) {
      throw new Error("Course not found");
    }

    const enrollment =
      await paymentRepository.findEnrollment(
        userId,
        course.id
      );

    return {
      enrolled: Boolean(enrollment),
      enrollment,
    };
  },
};

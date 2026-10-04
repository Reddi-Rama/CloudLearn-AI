import crypto from "crypto";
import Razorpay from "razorpay";

import { paymentRepository } from "./payment.repository";

const PROGRAMMING_COURSE_PRICE = 49;

const AIML_BUNDLE_PRICE = 99;

const AIML_COURSES = [
  "ai-foundations",
  "machine-learning",
  "deep-learning",
  "generative-ai",
];

function isAIMLCourse(courseSlug: string) {
  return AIML_COURSES.includes(courseSlug);
}

function getCoursePrice(courseSlug: string) {
  return isAIMLCourse(courseSlug)
    ? AIML_BUNDLE_PRICE
    : PROGRAMMING_COURSE_PRICE;
}

const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

if (!razorpayKeyId || !razorpayKeySecret) {
  console.warn(
    "?? Razorpay environment variables are missing."
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
    const coursePrice = getCoursePrice(courseSlug);
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
      amount: coursePrice * 100,
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
        amount: coursePrice,
        razorpayOrderId: order.id,
      });

    return {
      paymentId: payment.id,
      orderId: order.id,
      amount: coursePrice,
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

    const expectedPrice =
      getCoursePrice(payment.courseSlug);

    if (payment.amount !== expectedPrice) {
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

        /* AIML_BUNDLE_ENROLLMENT */

    if (isAIMLCourse(payment.courseSlug)) {
      const enrollments = [];

      for (const slug of AIML_COURSES) {
        const aimlCourse =
          await paymentRepository.findCourseBySlug(slug);

        if (!aimlCourse) {
          throw new Error(
            `AIML course not found: ${slug}`
          );
        }

        const enrollment =
          await paymentRepository.createEnrollment(
            userId,
            aimlCourse.id
          );

        enrollments.push(enrollment);
      }

      return {
        payment: updatedPayment,
        enrollment: enrollments[0],
        enrollments,
        course: {
          id: course.id,
          title: "AIML Full Course",
          slug: payment.courseSlug,
        },
        bundleCourses: AIML_COURSES,
      };
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


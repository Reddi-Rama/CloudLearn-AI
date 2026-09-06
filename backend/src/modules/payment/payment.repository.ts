import { prisma } from "../../lib/prisma";

export const paymentRepository = {
  async findCourseBySlug(courseSlug: string) {
    return prisma.course.findUnique({
      where: {
        slug: courseSlug,
      },
    });
  },

  async findEnrollment(
    userId: string,
    courseId: string
  ) {
    return prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });
  },

  async createPayment(data: {
    id: string;
    userId: string;
    courseSlug: string;
    amount: number;
    razorpayOrderId: string;
  }) {
    return prisma.payment.create({
      data: {
        id: data.id,
        userId: data.userId,
        courseSlug: data.courseSlug,
        amount: data.amount,
        status: "PENDING",
        razorpayOrderId: data.razorpayOrderId,
      },
    });
  },

  async findPaymentByOrderId(
    razorpayOrderId: string
  ) {
    return prisma.payment.findFirst({
      where: {
        razorpayOrderId,
      },
    });
  },

  async markPaymentSuccess(
    paymentId: string,
    razorpayPaymentId: string
  ) {
    return prisma.payment.update({
      where: {
        id: paymentId,
      },
      data: {
        status: "SUCCESS",
        razorpayPaymentId,
      },
    });
  },

  async markPaymentFailed(paymentId: string) {
    return prisma.payment.update({
      where: {
        id: paymentId,
      },
      data: {
        status: "FAILED",
      },
    });
  },

  async createEnrollment(
    userId: string,
    courseId: string
  ) {
    return prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      update: {},
      create: {
        userId,
        courseId,
        status: "ACTIVE",
        progress: 0,
      },
    });
  },
};


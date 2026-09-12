"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRepository = void 0;
const prisma_1 = require("../../lib/prisma");
exports.paymentRepository = {
    async findCourseBySlug(courseSlug) {
        return prisma_1.prisma.course.findUnique({
            where: {
                slug: courseSlug,
            },
        });
    },
    async findEnrollment(userId, courseId) {
        return prisma_1.prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId,
                    courseId,
                },
            },
        });
    },
    async createPayment(data) {
        return prisma_1.prisma.payment.create({
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
    async findPaymentByOrderId(razorpayOrderId) {
        return prisma_1.prisma.payment.findFirst({
            where: {
                razorpayOrderId,
            },
        });
    },
    async markPaymentSuccess(paymentId, razorpayPaymentId) {
        return prisma_1.prisma.payment.update({
            where: {
                id: paymentId,
            },
            data: {
                status: "SUCCESS",
                razorpayPaymentId,
            },
        });
    },
    async markPaymentFailed(paymentId) {
        return prisma_1.prisma.payment.update({
            where: {
                id: paymentId,
            },
            data: {
                status: "FAILED",
            },
        });
    },
    async createEnrollment(userId, courseId) {
        return prisma_1.prisma.enrollment.upsert({
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
//# sourceMappingURL=payment.repository.js.map
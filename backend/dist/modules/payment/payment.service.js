"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const crypto_1 = __importDefault(require("crypto"));
const razorpay_1 = __importDefault(require("razorpay"));
const payment_repository_1 = require("./payment.repository");
const COURSE_PRICE = 49;
const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
if (!razorpayKeyId || !razorpayKeySecret) {
    console.warn("⚠️ Razorpay environment variables are missing.");
}
const razorpay = new razorpay_1.default({
    key_id: razorpayKeyId || "",
    key_secret: razorpayKeySecret || "",
});
exports.paymentService = {
    async createOrder(userId, courseSlug) {
        const course = await payment_repository_1.paymentRepository.findCourseBySlug(courseSlug);
        if (!course) {
            throw new Error("Course not found");
        }
        const existingEnrollment = await payment_repository_1.paymentRepository.findEnrollment(userId, course.id);
        if (existingEnrollment) {
            throw new Error("You are already enrolled in this course");
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
        const payment = await payment_repository_1.paymentRepository.createPayment({
            id: crypto_1.default.randomUUID(),
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
    async verifyPayment(userId, razorpayOrderId, razorpayPaymentId, razorpaySignature) {
        const payment = await payment_repository_1.paymentRepository.findPaymentByOrderId(razorpayOrderId);
        if (!payment) {
            throw new Error("Payment not found");
        }
        if (payment.userId !== userId) {
            throw new Error("Unauthorized payment");
        }
        if (payment.amount !== COURSE_PRICE) {
            throw new Error("Invalid payment amount");
        }
        const generatedSignature = crypto_1.default
            .createHmac("sha256", razorpayKeySecret || "")
            .update(`${razorpayOrderId}|${razorpayPaymentId}`)
            .digest("hex");
        if (generatedSignature !== razorpaySignature) {
            await payment_repository_1.paymentRepository.markPaymentFailed(payment.id);
            throw new Error("Payment signature verification failed");
        }
        const updatedPayment = await payment_repository_1.paymentRepository.markPaymentSuccess(payment.id, razorpayPaymentId);
        const course = await payment_repository_1.paymentRepository.findCourseBySlug(payment.courseSlug);
        if (!course) {
            throw new Error("Course not found");
        }
        const enrollment = await payment_repository_1.paymentRepository.createEnrollment(userId, course.id);
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
    async checkEnrollment(userId, courseSlug) {
        const course = await payment_repository_1.paymentRepository.findCourseBySlug(courseSlug);
        if (!course) {
            throw new Error("Course not found");
        }
        const enrollment = await payment_repository_1.paymentRepository.findEnrollment(userId, course.id);
        return {
            enrolled: Boolean(enrollment),
            enrollment,
        };
    },
};
//# sourceMappingURL=payment.service.js.map
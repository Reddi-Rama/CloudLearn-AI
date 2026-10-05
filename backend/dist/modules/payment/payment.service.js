"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const crypto_1 = __importDefault(require("crypto"));
const razorpay_1 = __importDefault(require("razorpay"));
const payment_repository_1 = require("./payment.repository");
const PROGRAMMING_COURSE_PRICE = 49;
const AIML_BUNDLE_PRICE = 99;
const AIML_COURSES = [
    "ai-foundations",
    "machine-learning",
    "deep-learning",
    "generative-ai",
];
function isAIMLCourse(courseSlug) {
    return AIML_COURSES.includes(courseSlug);
}
function getCoursePrice(courseSlug) {
    return isAIMLCourse(courseSlug)
        ? AIML_BUNDLE_PRICE
        : PROGRAMMING_COURSE_PRICE;
}
const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
if (!razorpayKeyId || !razorpayKeySecret) {
    console.warn("?? Razorpay environment variables are missing.");
}
const razorpay = new razorpay_1.default({
    key_id: razorpayKeyId || "",
    key_secret: razorpayKeySecret || "",
});
exports.paymentService = {
    async createOrder(userId, courseSlug) {
        const coursePrice = getCoursePrice(courseSlug);
        const course = await payment_repository_1.paymentRepository.findCourseBySlug(courseSlug);
        if (!course) {
            throw new Error("Course not found");
        }
        const existingEnrollment = await payment_repository_1.paymentRepository.findEnrollment(userId, course.id);
        if (existingEnrollment) {
            throw new Error("You are already enrolled in this course");
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
        const payment = await payment_repository_1.paymentRepository.createPayment({
            id: crypto_1.default.randomUUID(),
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
    async verifyPayment(userId, razorpayOrderId, razorpayPaymentId, razorpaySignature) {
        const payment = await payment_repository_1.paymentRepository.findPaymentByOrderId(razorpayOrderId);
        if (!payment) {
            throw new Error("Payment not found");
        }
        if (payment.userId !== userId) {
            throw new Error("Unauthorized payment");
        }
        const expectedPrice = getCoursePrice(payment.courseSlug);
        if (payment.amount !== expectedPrice) {
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
        /* AIML_BUNDLE_ENROLLMENT */
        if (isAIMLCourse(payment.courseSlug)) {
            const enrollments = [];
            for (const slug of AIML_COURSES) {
                const aimlCourse = await payment_repository_1.paymentRepository.findCourseBySlug(slug);
                if (!aimlCourse) {
                    throw new Error(`AIML course not found: ${slug}`);
                }
                const enrollment = await payment_repository_1.paymentRepository.createEnrollment(userId, aimlCourse.id);
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
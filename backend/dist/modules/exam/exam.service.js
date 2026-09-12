"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examService = void 0;
const exam_repository_1 = require("./exam.repository");
const certificate_service_1 = require("../certificate/certificate.service");
exports.examService = {
    async getExam(userId, courseSlug) {
        const exam = await exam_repository_1.examRepository.findPublishedExamByCourseSlug(courseSlug);
        if (!exam) {
            throw new Error("Published exam not found for this course");
        }
        const enrollment = await exam_repository_1.examRepository.findEnrollment(userId, exam.course.id);
        if (!enrollment) {
            throw new Error("You are not enrolled in this course");
        }
        return {
            id: exam.id,
            courseSlug: exam.course.slug,
            courseTitle: exam.course.title,
            title: exam.title,
            passingPercentage: exam.passingPercentage,
            questions: exam.questions.map((question) => ({
                id: question.id,
                position: question.position,
                question: question.question,
                options: question.options,
                explanation: question.explanation,
            })),
        };
    },
    async submitExam(userId, courseSlug, answers) {
        const exam = await exam_repository_1.examRepository.findPublishedExamByCourseSlug(courseSlug);
        if (!exam) {
            throw new Error("Published exam not found for this course");
        }
        const enrollment = await exam_repository_1.examRepository.findEnrollment(userId, exam.course.id);
        if (!enrollment) {
            throw new Error("You are not enrolled in this course");
        }
        if (!Array.isArray(answers)) {
            throw new Error("Answers must be an array");
        }
        const submittedMap = new Map();
        for (const item of answers) {
            if (item === null ||
                typeof item !== "object" ||
                (typeof item.questionId !== "string" &&
                    typeof item.questionId !== "number") ||
                typeof item.answer !== "number" ||
                !Number.isInteger(item.answer)) {
                throw new Error("Invalid answer format");
            }
            const matchedQuestion = exam.questions.find((question) => {
                if (typeof item.questionId === "number") {
                    return question.position === item.questionId;
                }
                return question.id === item.questionId;
            });
            if (!matchedQuestion) {
                throw new Error(`Invalid question ID: ${String(item.questionId)}`);
            }
            const options = Array.isArray(matchedQuestion.options)
                ? matchedQuestion.options
                : [];
            if (item.answer < 0 ||
                item.answer >= options.length) {
                /*
                 * -1 represents an unanswered question.
                 * Any other value must point to a real option.
                 */
                if (item.answer !== -1) {
                    throw new Error(`Invalid answer for question ${String(item.questionId)}`);
                }
                submittedMap.delete(matchedQuestion.id);
                continue;
            }
            submittedMap.set(matchedQuestion.id, item.answer);
        }
        let score = 0;
        for (const question of exam.questions) {
            const selectedAnswer = submittedMap.get(question.id);
            if (typeof selectedAnswer === "number" &&
                selectedAnswer === question.correctAnswer) {
                score++;
            }
        }
        const total = exam.questions.length;
        if (total === 0) {
            throw new Error("This exam has no questions");
        }
        const percentage = Math.round((score / total) * 100);
        const passed = percentage >= exam.passingPercentage;
        const attempt = await exam_repository_1.examRepository.createAttempt({
            userId,
            examId: exam.id,
            score,
            total,
            percentage,
            passed,
        });
        let certificate = null;
        if (passed) {
            /*
             * A passed attempt now automatically creates or
             * reuses the certificate for this course.
             */
            certificate =
                await certificate_service_1.certificateService.generate(userId, exam.course.slug, exam.course.title);
        }
        return {
            attemptId: attempt.id,
            courseSlug: exam.course.slug,
            courseTitle: exam.course.title,
            score,
            total,
            percentage,
            passingPercentage: exam.passingPercentage,
            passed,
            certificate: certificate
                ? {
                    certificateId: certificate.certificateId,
                    courseTitle: certificate.courseTitle,
                    issuedAt: certificate.issuedAt,
                }
                : null,
            submittedAt: attempt.submittedAt,
        };
    },
    async getLatestResult(userId, courseSlug) {
        const exam = await exam_repository_1.examRepository.findPublishedExamByCourseSlug(courseSlug);
        if (!exam) {
            throw new Error("Published exam not found for this course");
        }
        const attempt = await exam_repository_1.examRepository.findLatestAttempt(userId, exam.id);
        if (!attempt) {
            return null;
        }
        return {
            attemptId: attempt.id,
            score: attempt.score,
            total: attempt.total,
            percentage: attempt.percentage,
            passingPercentage: exam.passingPercentage,
            passed: attempt.passed,
            submittedAt: attempt.submittedAt,
            courseSlug: exam.course.slug,
            courseTitle: exam.course.title,
        };
    },
};
//# sourceMappingURL=exam.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examController = void 0;
const exam_service_1 = require("./exam.service");
exports.examController = {
    async getExam(req, res) {
        try {
            const userId = req.user?.userId;
            const courseSlug = String(req.params.courseSlug || "");
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: "Authentication required",
                });
            }
            if (!courseSlug) {
                return res.status(400).json({
                    success: false,
                    message: "Course slug is required",
                });
            }
            const exam = await exam_service_1.examService.getExam(userId, courseSlug);
            return res.status(200).json({
                success: true,
                data: exam,
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Failed to load exam";
            const status = message.includes("not enrolled")
                ? 403
                : message.includes("not found")
                    ? 404
                    : 400;
            return res.status(status).json({
                success: false,
                message,
            });
        }
    },
    async submitExam(req, res) {
        try {
            const userId = req.user?.userId;
            const courseSlug = String(req.params.courseSlug || "");
            const { answers } = req.body;
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: "Authentication required",
                });
            }
            if (!courseSlug) {
                return res.status(400).json({
                    success: false,
                    message: "Course slug is required",
                });
            }
            const result = await exam_service_1.examService.submitExam(userId, courseSlug, answers);
            return res.status(200).json({
                success: true,
                message: result.passed
                    ? "Exam passed successfully"
                    : "Exam submitted successfully",
                data: result,
            });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Failed to submit exam";
            const status = message.includes("not enrolled")
                ? 403
                : message.includes("not found")
                    ? 404
                    : 400;
            return res.status(status).json({
                success: false,
                message,
            });
        }
    },
    async getLatestResult(req, res) {
        try {
            const userId = req.user?.userId;
            const courseSlug = String(req.params.courseSlug || "");
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: "Authentication required",
                });
            }
            if (!courseSlug) {
                return res.status(400).json({
                    success: false,
                    message: "Course slug is required",
                });
            }
            const result = await exam_service_1.examService.getLatestResult(userId, courseSlug);
            return res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            const message = error instanceof Error
                ? error.message
                : "Failed to load exam result";
            return res.status(400).json({
                success: false,
                message,
            });
        }
    },
};
//# sourceMappingURL=exam.controller.js.map
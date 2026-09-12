import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { examService } from "./exam.service";

export const examController = {
  async getExam(req: AuthRequest, res: Response) {
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

      const exam = await examService.getExam(userId, courseSlug);

      return res.status(200).json({
        success: true,
        data: exam,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to load exam";

      const status =
        message.includes("not enrolled")
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

  async submitExam(req: AuthRequest, res: Response) {
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

      const result = await examService.submitExam(
        userId,
        courseSlug,
        answers
      );

      return res.status(200).json({
        success: true,
        message: result.passed
          ? "Exam passed successfully"
          : "Exam submitted successfully",
        data: result,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to submit exam";

      const status =
        message.includes("not enrolled")
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

  async getLatestResult(req: AuthRequest, res: Response) {
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

      const result = await examService.getLatestResult(
        userId,
        courseSlug
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to load exam result";

      return res.status(400).json({
        success: false,
        message,
      });
    }
  },
};

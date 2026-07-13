import { Response } from "express";
import { progressService } from "./progress.service";
import { AuthRequest } from "../../middleware/auth.middleware";

export const progressController = {
  async save(req: AuthRequest, res: Response) {
    const userId = req.user!.userId;

    const {
      courseSlug,
      moduleSlug,
      lessonSlug,
      completed,
    } = req.body;

    const progress = await progressService.saveProgress(
      userId,
      courseSlug,
      moduleSlug,
      lessonSlug,
      completed
    );

    res.json({
      success: true,
      data: progress,
    });
  },

  async getCourseProgress(
    req: AuthRequest,
    res: Response
  ) {
    const userId = req.user!.userId;
    const { courseSlug } = req.params;

    const progress = await progressService.getCourseProgress(
      userId,
      courseSlug
    );

    res.json({
      success: true,
      data: progress,
    });
  },

  async resume(
    req: AuthRequest,
    res: Response
  ) {
    const userId = req.user!.userId;
    const { courseSlug } = req.params;

    const lesson = await progressService.resumeCourse(
      userId,
      courseSlug
    );

    res.json({
      success: true,
      data: lesson,
    });
  },
};
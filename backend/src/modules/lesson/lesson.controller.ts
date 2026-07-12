import { Request, Response } from "express";
import { lessonService } from "./lesson.service";

export const lessonController = {
  async create(req: Request, res: Response) {
    try {
      const lesson = await lessonService.create(req.body);

      return res.status(201).json({
        success: true,
        message: "Lesson created successfully.",
        data: lesson,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create lesson.",
      });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const lessons = await lessonService.findAll();

      return res.status(200).json({
        success: true,
        data: lessons,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch lessons.",
      });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const lesson = await lessonService.findById(id);

      return res.status(200).json({
        success: true,
        data: lesson,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Lesson not found.",
      });
    }
  },

  async findByModule(req: Request, res: Response) {
    try {
      const moduleId = req.params.moduleId as string;

      const lessons =
        await lessonService.findByModule(moduleId);

      return res.status(200).json({
        success: true,
        data: lessons,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch module lessons.",
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const lesson = await lessonService.update(
        id,
        req.body
      );

      return res.status(200).json({
        success: true,
        message: "Lesson updated successfully.",
        data: lesson,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to update lesson.",
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const result = await lessonService.delete(id);

      return res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to delete lesson.",
      });
    }
  },
};
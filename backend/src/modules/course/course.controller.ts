import { Request, Response } from "express";
import { courseService } from "./course.service";

export const courseController = {
  async create(req: Request, res: Response) {
    try {
      const course = await courseService.create(req.body);

      return res.status(201).json({
        success: true,
        message: "Course created successfully.",
        data: course,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create course.",
      });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const courses = await courseService.findAll();

      return res.status(200).json({
        success: true,
        data: courses,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch courses.",
      });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const course = await courseService.findById(id);

      return res.status(200).json({
        success: true,
        data: course,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Course not found.",
      });
    }
  },

  async findByDomain(req: Request, res: Response) {
    try {
      const domainId = req.params.domainId as string;

      const courses = await courseService.findByDomain(domainId);

      return res.status(200).json({
        success: true,
        data: courses,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch domain courses.",
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const course = await courseService.update(
        id,
        req.body
      );

      return res.status(200).json({
        success: true,
        message: "Course updated successfully.",
        data: course,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to update course.",
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const result = await courseService.delete(id);

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
            : "Failed to delete course.",
      });
    }
  },
};
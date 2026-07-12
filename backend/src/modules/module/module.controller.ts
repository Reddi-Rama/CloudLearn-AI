import { Request, Response } from "express";
import { moduleService } from "./module.service";

export const moduleController = {
  async create(req: Request, res: Response) {
    try {
      const module = await moduleService.create(req.body);

      return res.status(201).json({
        success: true,
        message: "Module created successfully.",
        data: module,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create module.",
      });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const modules = await moduleService.findAll();

      return res.status(200).json({
        success: true,
        data: modules,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch modules.",
      });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const module = await moduleService.findById(id);

      return res.status(200).json({
        success: true,
        data: module,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Module not found.",
      });
    }
  },

  async findByCourse(req: Request, res: Response) {
    try {
      const courseId = req.params.courseId as string;

      const modules =
        await moduleService.findByCourse(courseId);

      return res.status(200).json({
        success: true,
        data: modules,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch course modules.",
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const module = await moduleService.update(
        id,
        req.body
      );

      return res.status(200).json({
        success: true,
        message: "Module updated successfully.",
        data: module,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to update module.",
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const result = await moduleService.delete(id);

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
            : "Failed to delete module.",
      });
    }
  },
};
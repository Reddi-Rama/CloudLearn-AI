import { prisma } from "../../lib/prisma";
import { moduleRepository } from "./module.repository";
import {
  CreateModuleInput,
  UpdateModuleInput,
} from "./module.validator";

export const moduleService = {
  async create(data: CreateModuleInput) {
    // Check if course exists
    const course = await prisma.course.findUnique({
      where: {
        id: data.courseId,
      },
    });

    if (!course) {
      throw new Error("Course not found.");
    }

    // Prevent duplicate position in the same course
    const existing = await prisma.module.findFirst({
      where: {
        courseId: data.courseId,
        position: data.position,
      },
    });

    if (existing) {
      throw new Error(
        "A module with this position already exists in this course."
      );
    }

    return moduleRepository.create(data);
  },

  async findAll() {
    return moduleRepository.findAll();
  },

  async findById(id: string) {
    const module = await moduleRepository.findById(id);

    if (!module) {
      throw new Error("Module not found.");
    }

    return module;
  },

  async findByCourse(courseId: string) {
    return moduleRepository.findByCourse(courseId);
  },

  async update(
    id: string,
    data: UpdateModuleInput
  ) {
    const module = await moduleRepository.findById(id);

    if (!module) {
      throw new Error("Module not found.");
    }

    if (data.position !== undefined) {
      const duplicate = await prisma.module.findFirst({
        where: {
          courseId: module.courseId,
          position: data.position,
          NOT: {
            id,
          },
        },
      });

      if (duplicate) {
        throw new Error(
          "A module with this position already exists."
        );
      }
    }

    return moduleRepository.update(id, data);
  },

  async delete(id: string) {
    const module = await moduleRepository.findById(id);

    if (!module) {
      throw new Error("Module not found.");
    }

    await moduleRepository.delete(id);

    return {
      message: "Module deleted successfully.",
    };
  },
};
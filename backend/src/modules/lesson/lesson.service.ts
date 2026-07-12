import { prisma } from "../../lib/prisma";
import { lessonRepository } from "./lesson.repository";
import {
  CreateLessonInput,
  UpdateLessonInput,
} from "./lesson.validator";

export const lessonService = {
  async create(data: CreateLessonInput) {
    // Check if module exists
    const module = await prisma.module.findUnique({
      where: {
        id: data.moduleId,
      },
    });

    if (!module) {
      throw new Error("Module not found.");
    }

    // Check duplicate slug
    const existingSlug = await lessonRepository.findBySlug(
      data.slug
    );

    if (existingSlug) {
      throw new Error("Lesson slug already exists.");
    }

    // Prevent duplicate lesson position inside the same module
    const existingPosition = await prisma.lesson.findFirst({
      where: {
        moduleId: data.moduleId,
        position: data.position,
      },
    });

    if (existingPosition) {
      throw new Error(
        "A lesson with this position already exists in this module."
      );
    }

    return lessonRepository.create(data);
  },

  async findAll() {
    return lessonRepository.findAll();
  },

  async findById(id: string) {
    const lesson = await lessonRepository.findById(id);

    if (!lesson) {
      throw new Error("Lesson not found.");
    }

    return lesson;
  },

  async findByModule(moduleId: string) {
    return lessonRepository.findByModule(moduleId);
  },

  async update(
    id: string,
    data: UpdateLessonInput
  ) {
    const lesson = await lessonRepository.findById(id);

    if (!lesson) {
      throw new Error("Lesson not found.");
    }

    if (data.slug) {
      const existingSlug = await lessonRepository.findBySlug(
        data.slug
      );

      if (
        existingSlug &&
        existingSlug.id !== id
      ) {
        throw new Error("Lesson slug already exists.");
      }
    }

    if (data.position !== undefined) {
      const existingPosition =
        await prisma.lesson.findFirst({
          where: {
            moduleId: lesson.moduleId,
            position: data.position,
            NOT: {
              id,
            },
          },
        });

      if (existingPosition) {
        throw new Error(
          "A lesson with this position already exists."
        );
      }
    }

    return lessonRepository.update(id, data);
  },

  async delete(id: string) {
    const lesson = await lessonRepository.findById(id);

    if (!lesson) {
      throw new Error("Lesson not found.");
    }

    await lessonRepository.delete(id);

    return {
      message: "Lesson deleted successfully.",
    };
  },
};
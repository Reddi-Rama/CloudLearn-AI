import { prisma } from "../../lib/prisma";
import {
  CreateLessonInput,
  UpdateLessonInput,
} from "./lesson.validator";

export const lessonRepository = {
  create(data: CreateLessonInput) {
    return prisma.lesson.create({
      data,
      include: {
        module: true,
      },
    });
  },

  findAll() {
    return prisma.lesson.findMany({
      include: {
        module: true,
      },
      orderBy: {
        position: "asc",
      },
    });
  },

  findById(id: string) {
    return prisma.lesson.findUnique({
      where: {
        id,
      },
      include: {
        module: true,
      },
    });
  },

  findBySlug(slug: string) {
    return prisma.lesson.findUnique({
      where: {
        slug,
      },
    });
  },

  findByModule(moduleId: string) {
    return prisma.lesson.findMany({
      where: {
        moduleId,
      },
      include: {
        module: true,
      },
      orderBy: {
        position: "asc",
      },
    });
  },

  update(
    id: string,
    data: UpdateLessonInput
  ) {
    return prisma.lesson.update({
      where: {
        id,
      },
      data,
      include: {
        module: true,
      },
    });
  },

  delete(id: string) {
    return prisma.lesson.delete({
      where: {
        id,
      },
    });
  },
};
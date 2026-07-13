import { prisma } from "../../lib/prisma";

export const progressRepository = {
  async upsertProgress(data: {
    userId: string;
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
    completed: boolean;
  }) {
    return prisma.progress.upsert({
      where: {
        userId_lessonSlug: {
          userId: data.userId,
          lessonSlug: data.lessonSlug,
        },
      },
      update: {
        completed: data.completed,
        moduleSlug: data.moduleSlug,
        courseSlug: data.courseSlug,
        completedAt: data.completed ? new Date() : null,
      },
      create: {
        ...data,
        completedAt: data.completed ? new Date() : null,
      },
    });
  },

  async getCourseProgress(
    userId: string,
    courseSlug: string
  ) {
    return prisma.progress.findMany({
      where: {
        userId,
        courseSlug,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  },

  async getLastLesson(
    userId: string,
    courseSlug: string
  ) {
    return prisma.progress.findFirst({
      where: {
        userId,
        courseSlug,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
};
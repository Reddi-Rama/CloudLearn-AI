import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const examRepository = {
  async findPublishedExamByCourseSlug(courseSlug: string) {
    return prisma.exam.findFirst({
      where: {
        isPublished: true,
        course: {
          slug: courseSlug,
        },
      },
      include: {
        course: true,
        questions: {
          orderBy: {
            position: "asc",
          },
        },
      },
    });
  },

  async findCourseBySlug(courseSlug: string) {
    return prisma.course.findUnique({
      where: {
        slug: courseSlug,
      },
      select: {
        id: true,
        slug: true,
        title: true,
      },
    });
  },

  async findEnrollment(userId: string, courseId: string) {
    return prisma.enrollment.findFirst({
      where: {
        userId,
        courseId,
      },
      select: {
        id: true,
        status: true,
      },
    });
  },

  async createAttempt(data: {
    userId: string;
    examId: string;
    score: number;
    total: number;
    percentage: number;
    passed: boolean;
  }) {
    return prisma.examAttempt.create({
      data,
    });
  },

  async findLatestAttempt(userId: string, examId: string) {
    return prisma.examAttempt.findFirst({
      where: {
        userId,
        examId,
      },
      orderBy: {
        submittedAt: "desc",
      },
    });
  },
};

import { progressRepository } from "./progress.repository";

export const progressService = {
  async saveProgress(
    userId: string,
    courseSlug: string,
    moduleSlug: string,
    lessonSlug: string,
    completed: boolean
  ) {
    return progressRepository.upsertProgress({
      userId,
      courseSlug,
      moduleSlug,
      lessonSlug,
      completed,
    });
  },

  async getCourseProgress(
    userId: string,
    courseSlug: string
  ) {
    const progress =
      await progressRepository.getCourseProgress(
        userId,
        courseSlug
      );

    const completedLessons = progress.filter(
      (lesson) => lesson.completed
    ).length;

    return {
      totalLessons: progress.length,
      completedLessons,
      percentage:
        progress.length === 0
          ? 0
          : Math.round(
              (completedLessons / progress.length) * 100
            ),
      lessons: progress,
    };
  },

  async resumeCourse(
    userId: string,
    courseSlug: string
  ) {
    return progressRepository.getLastLesson(
      userId,
      courseSlug
    );
  },
};
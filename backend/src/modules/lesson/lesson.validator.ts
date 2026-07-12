import { z } from "zod";

export const createLessonSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  content: z.string().min(10),
  position: z.number().int().positive(),
  estimatedReadTime: z.number().int().positive(),
  isPublished: z.boolean().default(true),
  moduleId: z.string(),
});

export const updateLessonSchema =
  createLessonSchema.partial();

export type CreateLessonInput =
  z.infer<typeof createLessonSchema>;

export type UpdateLessonInput =
  z.infer<typeof updateLessonSchema>;
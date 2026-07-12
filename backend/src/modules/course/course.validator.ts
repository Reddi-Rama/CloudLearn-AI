import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  level: z.enum([
    "BEGINNER",
    "INTERMEDIATE",
    "ADVANCED",
  ]),
  price: z.number().min(0).default(0),
  domainId: z.string(),
});

export const updateCourseSchema =
  createCourseSchema.partial();

export type CreateCourseInput =
  z.infer<typeof createCourseSchema>;

export type UpdateCourseInput =
  z.infer<typeof updateCourseSchema>;
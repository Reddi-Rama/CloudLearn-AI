import { z } from "zod";

export const createModuleSchema = z.object({
  title: z.string().min(3),
  position: z.number().int().positive(),
  courseId: z.string(),
});

export const updateModuleSchema =
  createModuleSchema.partial();

export type CreateModuleInput =
  z.infer<typeof createModuleSchema>;

export type UpdateModuleInput =
  z.infer<typeof updateModuleSchema>;
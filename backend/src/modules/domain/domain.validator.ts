import { z } from "zod";

export const createDomainSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Domain name is required.")
    .max(100),

  slug: z
    .string()
    .trim()
    .min(2)
    .max(100),

  description: z
    .string()
    .trim()
    .optional(),

  icon: z
    .string()
    .trim()
    .optional(),
});

export const updateDomainSchema =
  createDomainSchema.partial();

export type CreateDomainInput =
  z.infer<typeof createDomainSchema>;

export type UpdateDomainInput =
  z.infer<typeof updateDomainSchema>;
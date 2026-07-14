import { nanoid } from "nanoid";

export function generateCertificateId(
  courseSlug: string
) {
  const prefix = courseSlug
    .substring(0, 2)
    .toUpperCase();

  return `CL-${prefix}-${nanoid(6).toUpperCase()}`;
}
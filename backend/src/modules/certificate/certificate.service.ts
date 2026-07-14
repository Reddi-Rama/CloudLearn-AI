import { certificateRepository } from "./certificate.repository";
import { generateCertificate } from "../../generators/certificate.generator";
import { generateCertificateId } from "../../utils/certificateId";
import { prisma } from "../../lib/prisma";

export const certificateService = {
  async generate(
    userId: string,
    courseSlug: string,
    courseTitle: string
  ) {
    // Check if certificate already exists
    const existing = await certificateRepository.findUserCertificate(
      userId,
      courseSlug
    );

    if (existing) {
      return existing;
    }

    // Get user details
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Generate unique certificate ID
    const certificateId = generateCertificateId(courseSlug);

    // Generate PDF
    const filePath = await generateCertificate({
      studentName: user.fullName,
      courseTitle,
      certificateId,
      issueDate: new Date().toLocaleDateString("en-IN"),
    });

    // Save in database
    const certificate = await certificateRepository.create({
      certificateId,
      userId,
      courseSlug,
      courseTitle,
      filePath,
    });

    return certificate;
  },

  async findByCertificateId(certificateId: string) {
    return certificateRepository.findByCertificateId(
      certificateId
    );
  },
};
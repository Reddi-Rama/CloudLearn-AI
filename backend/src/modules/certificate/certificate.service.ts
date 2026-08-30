import { certificateRepository } from "./certificate.repository";
import { generateCertificate as generateCertificatePdf } from "../../generators/certificate.generator";
import { generateCertificateId } from "../../utils/certificateId";
import { prisma } from "../../lib/prisma";

export const certificateService = {
  /**
   * Generate a certificate for a completed course
   */
  async generate(
    userId: string,
    courseSlug: string,
    courseTitle: string
  ) {
    if (!courseSlug || !courseTitle) {
      throw new Error(
        "Course slug and course title are required"
      );
    }

    // Check whether the user already has this certificate
    const existing =
      await certificateRepository.findUserCertificate(
        userId,
        courseSlug
      );

    if (existing) {
      return existing;
    }

    // Get user information
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Generate unique certificate ID
    const certificateId =
      generateCertificateId(courseSlug);

    // Generate certificate PDF
    const filePath = await generateCertificatePdf({
      studentName: user.fullName,
      courseTitle,
      certificateId,
      issueDate: new Date().toLocaleDateString("en-IN"),
    });

    // Store certificate in database
    const certificate =
      await certificateRepository.create({
        certificateId,
        userId,
        courseSlug,
        courseTitle,
        filePath,
      });

    return certificate;
  },

  /**
   * Get all certificates belonging to one user
   */
  async getUserCertificates(userId: string) {
    return certificateRepository.findUserCertificates(
      userId
    );
  },

  /**
   * Find certificate by certificate ID
   */
  async findByCertificateId(certificateId: string) {
    return certificateRepository.findByCertificateId(
      certificateId
    );
  },
};
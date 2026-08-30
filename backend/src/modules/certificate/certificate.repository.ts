import { prisma } from "../../lib/prisma";

export const certificateRepository = {
  async create(data: {
    certificateId: string;
    userId: string;
    courseSlug: string;
    courseTitle: string;
    filePath: string;
  }) {
    return prisma.certificate.create({
      data: {
        certificateId: data.certificateId,
        userId: data.userId,
        courseSlug: data.courseSlug,
        courseTitle: data.courseTitle,
        filePath: data.filePath,
        paymentStatus: true,
      },
    });
  },

  async findByCertificateId(certificateId: string) {
    return prisma.certificate.findUnique({
      where: {
        certificateId,
      },
      include: {
        user: true,
      },
    });
  },

  async findUserCertificate(
    userId: string,
    courseSlug: string
  ) {
    return prisma.certificate.findFirst({
      where: {
        userId,
        courseSlug,
      },
    });
  },

  async findUserCertificates(userId: string) {
    return prisma.certificate.findMany({
      where: {
        userId,
      },
      orderBy: {
        issuedAt: "desc",
      },
    });
  },
};
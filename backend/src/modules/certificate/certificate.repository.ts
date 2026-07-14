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
        ...data,
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
};
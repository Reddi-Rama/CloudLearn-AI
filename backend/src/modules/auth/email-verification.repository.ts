import { prisma } from "../../lib/prisma";

export async function createVerificationOtp(data: {
  userId: string;
  codeHash: string;
  expiresAt: Date;
}) {
  return prisma.emailVerificationOtp.create({
    data: {
      userId: data.userId,
      codeHash: data.codeHash,
      expiresAt: data.expiresAt,
    },
  });
}

export async function findLatestVerificationOtp(
  userId: string
) {
  return prisma.emailVerificationOtp.findFirst({
    where: {
      userId,
      usedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function incrementOtpAttempts(
  otpId: string
) {
  return prisma.emailVerificationOtp.update({
    where: {
      id: otpId,
    },
    data: {
      attempts: {
        increment: 1,
      },
    },
  });
}

export async function markOtpAsUsed(
  otpId: string
) {
  return prisma.emailVerificationOtp.update({
    where: {
      id: otpId,
    },
    data: {
      usedAt: new Date(),
    },
  });
}

export async function deleteUserVerificationOtps(
  userId: string
) {
  return prisma.emailVerificationOtp.deleteMany({
    where: {
      userId,
    },
  });
}

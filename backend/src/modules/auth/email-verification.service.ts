import crypto from "crypto";

import {
  createVerificationOtp,
  deleteUserVerificationOtps,
  findLatestVerificationOtp,
  incrementOtpAttempts,
  markOtpAsUsed,
} from "./email-verification.repository";

import { findUserById } from "../user/user.repository";
import { userRepository } from "../user/user.repository";
import { sendVerificationOtp } from "../../services/email.service";

const OTP_EXPIRY_MINUTES = 10;
const MAX_OTP_ATTEMPTS = 5;

function generateOtp(): string {
  return crypto
    .randomInt(0, 1_000_000)
    .toString()
    .padStart(6, "0");
}

function hashOtp(otp: string): string {
  return crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
}

export async function createAndSendVerificationOtp(
  userId: string
) {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.isVerified) {
    throw new Error("Email is already verified");
  }

  const otp = generateOtp();
  const codeHash = hashOtp(otp);

  const expiresAt = new Date(
    Date.now() +
      OTP_EXPIRY_MINUTES * 60 * 1000
  );

  await deleteUserVerificationOtps(userId);

  await createVerificationOtp({
    userId,
    codeHash,
    expiresAt,
  });

  await sendVerificationOtp(
    user.email,
    user.fullName,
    otp
  );

  return {
    expiresInMinutes: OTP_EXPIRY_MINUTES,
  };
}

export async function verifyEmailOtp(
  userId: string,
  otp: string
) {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.isVerified) {
    return {
      verified: true,
      message: "Email is already verified",
    };
  }

  if (!/^\d{6}$/.test(otp)) {
    throw new Error("Invalid OTP format");
  }

  const verificationOtp =
    await findLatestVerificationOtp(userId);

  if (!verificationOtp) {
    throw new Error(
      "No active verification code found"
    );
  }

  if (verificationOtp.attempts >= MAX_OTP_ATTEMPTS) {
    throw new Error(
      "Too many incorrect attempts. Please request a new OTP."
    );
  }

  if (verificationOtp.expiresAt < new Date()) {
    throw new Error(
      "Verification code has expired. Please request a new OTP."
    );
  }

  const incomingHash = hashOtp(otp);

  if (incomingHash !== verificationOtp.codeHash) {
    await incrementOtpAttempts(
      verificationOtp.id
    );

    throw new Error("Incorrect verification code");
  }

  await markOtpAsUsed(
    verificationOtp.id
  );

  await userRepository.updateById(userId, {
    isVerified: true,
  });

  return {
    verified: true,
    message: "Email verification successful",
  };
}

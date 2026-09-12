"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAndSendVerificationOtp = createAndSendVerificationOtp;
exports.verifyEmailOtp = verifyEmailOtp;
const crypto_1 = __importDefault(require("crypto"));
const email_verification_repository_1 = require("./email-verification.repository");
const user_repository_1 = require("../user/user.repository");
const user_repository_2 = require("../user/user.repository");
const email_service_1 = require("../../services/email.service");
const OTP_EXPIRY_MINUTES = 10;
const MAX_OTP_ATTEMPTS = 5;
function generateOtp() {
    return crypto_1.default
        .randomInt(0, 1000000)
        .toString()
        .padStart(6, "0");
}
function hashOtp(otp) {
    return crypto_1.default
        .createHash("sha256")
        .update(otp)
        .digest("hex");
}
async function createAndSendVerificationOtp(userId) {
    const user = await (0, user_repository_1.findUserById)(userId);
    if (!user) {
        throw new Error("User not found");
    }
    if (user.isVerified) {
        throw new Error("Email is already verified");
    }
    const otp = generateOtp();
    const codeHash = hashOtp(otp);
    const expiresAt = new Date(Date.now() +
        OTP_EXPIRY_MINUTES * 60 * 1000);
    await (0, email_verification_repository_1.deleteUserVerificationOtps)(userId);
    await (0, email_verification_repository_1.createVerificationOtp)({
        userId,
        codeHash,
        expiresAt,
    });
    await (0, email_service_1.sendVerificationOtp)(user.email, user.fullName, otp);
    return {
        expiresInMinutes: OTP_EXPIRY_MINUTES,
    };
}
async function verifyEmailOtp(userId, otp) {
    const user = await (0, user_repository_1.findUserById)(userId);
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
    const verificationOtp = await (0, email_verification_repository_1.findLatestVerificationOtp)(userId);
    if (!verificationOtp) {
        throw new Error("No active verification code found");
    }
    if (verificationOtp.attempts >= MAX_OTP_ATTEMPTS) {
        throw new Error("Too many incorrect attempts. Please request a new OTP.");
    }
    if (verificationOtp.expiresAt < new Date()) {
        throw new Error("Verification code has expired. Please request a new OTP.");
    }
    const incomingHash = hashOtp(otp);
    if (incomingHash !== verificationOtp.codeHash) {
        await (0, email_verification_repository_1.incrementOtpAttempts)(verificationOtp.id);
        throw new Error("Incorrect verification code");
    }
    await (0, email_verification_repository_1.markOtpAsUsed)(verificationOtp.id);
    await user_repository_2.userRepository.updateById(userId, {
        isVerified: true,
    });
    return {
        verified: true,
        message: "Email verification successful",
    };
}
//# sourceMappingURL=email-verification.service.js.map
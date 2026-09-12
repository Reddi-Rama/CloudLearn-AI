"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.verifyEmail = verifyEmail;
exports.resendOtp = resendOtp;
exports.login = login;
exports.me = me;
exports.refresh = refresh;
exports.logout = logout;
const auth_service_1 = require("./auth.service");
const email_verification_service_1 = require("./email-verification.service");
const user_repository_1 = require("../user/user.repository");
async function register(req, res) {
    try {
        const { fullName, email, password } = req.body;
        if (typeof fullName !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string" ||
            !fullName.trim() ||
            !email.trim() ||
            !password) {
            return res.status(400).json({
                success: false,
                message: "Full name, email and password are required",
            });
        }
        const user = await (0, auth_service_1.registerUser)(fullName.trim(), email.trim().toLowerCase(), password);
        const otpData = await (0, email_verification_service_1.createAndSendVerificationOtp)(user.id);
        return res.status(201).json({
            success: true,
            message: "Registration successful. Verification OTP sent to your email.",
            data: {
                user,
                expiresInMinutes: otpData.expiresInMinutes,
            },
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Registration failed",
        });
    }
}
async function verifyEmail(req, res) {
    try {
        const { email, otp } = req.body;
        if (typeof email !== "string" ||
            typeof otp !== "string") {
            return res.status(400).json({
                success: false,
                message: "Email and OTP are required",
            });
        }
        const user = await (0, user_repository_1.findUserByEmail)(email.trim().toLowerCase());
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const result = await (0, email_verification_service_1.verifyEmailOtp)(user.id, otp.trim());
        return res.status(200).json({
            success: true,
            message: result.message,
            data: {
                verified: true,
            },
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Email verification failed",
        });
    }
}
async function resendOtp(req, res) {
    try {
        const { email } = req.body;
        if (typeof email !== "string" || !email.trim()) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }
        const user = await (0, user_repository_1.findUserByEmail)(email.trim().toLowerCase());
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "Email is already verified",
            });
        }
        const result = await (0, email_verification_service_1.createAndSendVerificationOtp)(user.id);
        return res.status(200).json({
            success: true,
            message: "A new verification OTP has been sent",
            data: {
                expiresInMinutes: result.expiresInMinutes,
            },
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to resend OTP",
        });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const data = await (0, auth_service_1.loginUser)(email, password);
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data,
        });
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Login failed",
        });
    }
}
async function me(req, res) {
    try {
        const user = await (0, auth_service_1.getCurrentUser)(req.user.userId);
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "User not found",
        });
    }
}
async function refresh(req, res) {
    try {
        const { refreshToken } = req.body;
        const data = await (0, auth_service_1.refreshAccessToken)(refreshToken);
        return res.status(200).json({
            success: true,
            message: "Token refreshed successfully",
            data,
        });
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Refresh failed",
        });
    }
}
async function logout(req, res) {
    try {
        await (0, auth_service_1.logoutUser)(req.user.userId);
        return res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Logout failed",
        });
    }
}
//# sourceMappingURL=auth.controller.js.map
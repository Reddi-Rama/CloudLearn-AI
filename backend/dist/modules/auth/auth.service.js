"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginWithGoogle = loginWithGoogle;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getCurrentUser = getCurrentUser;
exports.getUserById = getUserById;
exports.refreshAccessToken = refreshAccessToken;
exports.logoutUser = logoutUser;
exports.requestPasswordReset = requestPasswordReset;
exports.resetPassword = resetPassword;
const crypto_1 = require("crypto");
const google_auth_library_1 = require("google-auth-library");
const user_repository_1 = require("../user/user.repository");
const password_1 = require("../../helpers/password");
const jwt_1 = require("../../lib/jwt");
const email_service_1 = require("../../services/email.service");
const googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
async function loginWithGoogle(idToken) {
    if (!idToken || !idToken.trim()) {
        throw new Error("Google ID token is required");
    }
    const clientId = process.env.GOOGLE_CLIENT_ID;
    if (!clientId) {
        throw new Error("Google authentication is not configured");
    }
    const ticket = await googleClient.verifyIdToken({
        idToken: idToken.trim(),
        audience: clientId,
    });
    const payload = ticket.getPayload();
    if (!payload) {
        throw new Error("Invalid Google ID token");
    }
    const googleId = payload.sub;
    const email = payload.email?.trim().toLowerCase();
    const emailVerified = payload.email_verified === true;
    if (!googleId || !email || !emailVerified) {
        throw new Error("Google account email is not verified");
    }
    const fullName = payload.name?.trim() ||
        email.split("@")[0];
    const avatar = payload.picture || null;
    let user = await (0, user_repository_1.findUserByGoogleId)(googleId);
    if (!user) {
        user = await (0, user_repository_1.findUserByEmail)(email);
        if (user) {
            if (user.googleId &&
                user.googleId !== googleId) {
                throw new Error("This email is already linked to another Google account");
            }
            user = await user_repository_1.userRepository.updateById(user.id, {
                googleId,
                isVerified: true,
                avatar: user.avatar || avatar,
            });
        }
        else {
            user = await (0, user_repository_1.createGoogleUser)({
                fullName,
                email,
                googleId,
                avatar,
            });
        }
    }
    const accessToken = (0, jwt_1.generateAccessToken)(user.id);
    const refreshToken = (0, jwt_1.generateRefreshToken)(user.id);
    const refreshExpiry = new Date(Date.now() +
        7 * 24 * 60 * 60 * 1000);
    await (0, user_repository_1.saveRefreshToken)(user.id, refreshToken, refreshExpiry);
    return {
        user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        },
        accessToken,
        refreshToken,
    };
}
async function registerUser(fullName, email, password) {
    const existingUser = await (0, user_repository_1.findUserByEmail)(email);
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await (0, password_1.hashPassword)(password);
    const user = await (0, user_repository_1.createUser)({
        fullName,
        email,
        password: hashedPassword,
    });
    return {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
    };
}
async function loginUser(email, password) {
    const user = await (0, user_repository_1.findUserByEmail)(email.trim().toLowerCase());
    if (!user) {
        throw new Error("Invalid email or password");
    }
    if (!user.password) {
        throw new Error("This account uses Google Sign-In. Please continue with Google.");
    }
    const isPasswordCorrect = await (0, password_1.comparePassword)(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password");
    }
    if (!user.isVerified) {
        throw new Error("Please verify your email before logging in");
    }
    const accessToken = (0, jwt_1.generateAccessToken)(user.id);
    const refreshToken = (0, jwt_1.generateRefreshToken)(user.id);
    const refreshExpiry = new Date(Date.now() +
        7 * 24 * 60 * 60 * 1000);
    await (0, user_repository_1.saveRefreshToken)(user.id, refreshToken, refreshExpiry);
    return {
        user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        },
        accessToken,
        refreshToken,
    };
}
async function getCurrentUser(userId) {
    const user = await (0, user_repository_1.findUserProfile)(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}
async function getUserById(userId) {
    return (0, user_repository_1.findUserById)(userId);
}
async function refreshAccessToken(refreshToken) {
    const decoded = (0, jwt_1.verifyRefreshToken)(refreshToken);
    const user = await (0, user_repository_1.findUserById)(decoded.userId);
    if (!user) {
        throw new Error("User not found");
    }
    if (!user.isVerified) {
        throw new Error("Email is not verified");
    }
    if (user.refreshToken !==
        refreshToken ||
        !user.refreshTokenExpiry ||
        user.refreshTokenExpiry <
            new Date()) {
        throw new Error("Invalid refresh token");
    }
    const accessToken = (0, jwt_1.generateAccessToken)(user.id);
    return {
        accessToken,
    };
}
async function logoutUser(userId) {
    await (0, user_repository_1.clearRefreshToken)(userId);
    return {
        message: "Logged out successfully",
    };
}
function hashPasswordResetToken(token) {
    return (0, crypto_1.createHash)("sha256")
        .update(token)
        .digest("hex");
}
async function requestPasswordReset(email) {
    const normalizedEmail = email.trim().toLowerCase();
    const user = await (0, user_repository_1.findUserByEmail)(normalizedEmail);
    // Do not reveal whether an account exists.
    if (!user || !user.password || !user.isVerified) {
        return {
            message: "If an account with that email exists, a password reset link has been sent.",
        };
    }
    const resetToken = (0, crypto_1.randomBytes)(32).toString("hex");
    const hashedToken = hashPasswordResetToken(resetToken);
    const resetExpiry = new Date(Date.now() + 15 * 60 * 1000);
    await (0, user_repository_1.savePasswordResetToken)(user.id, hashedToken, resetExpiry);
    const frontendUrl = process.env.FRONTEND_URL ||
        "http://localhost:3000";
    const resetUrl = `${frontendUrl.replace(/\/$/, "")}` +
        `/reset-password?token=${encodeURIComponent(resetToken)}`;
    await (0, email_service_1.sendPasswordResetEmail)(user.email, user.fullName, resetUrl);
    return {
        message: "If an account with that email exists, a password reset link has been sent.",
    };
}
async function resetPassword(resetToken, newPassword) {
    const normalizedToken = resetToken.trim();
    if (!normalizedToken) {
        throw new Error("Password reset token is required");
    }
    const hashedToken = hashPasswordResetToken(normalizedToken);
    const user = await (0, user_repository_1.findUserByPasswordResetToken)(hashedToken);
    if (!user ||
        !user.passwordResetExpiry ||
        user.passwordResetExpiry < new Date()) {
        throw new Error("Invalid or expired password reset link");
    }
    if (!user.password) {
        throw new Error("This account does not use password authentication");
    }
    const hashedPassword = await (0, password_1.hashPassword)(newPassword);
    await user_repository_1.userRepository.updateById(user.id, {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpiry: null,
        refreshToken: null,
        refreshTokenExpiry: null,
    });
    return {
        message: "Password updated successfully. Please log in again.",
    };
}
//# sourceMappingURL=auth.service.js.map
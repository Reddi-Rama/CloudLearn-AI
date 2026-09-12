"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getCurrentUser = getCurrentUser;
exports.getUserById = getUserById;
exports.refreshAccessToken = refreshAccessToken;
exports.logoutUser = logoutUser;
const user_repository_1 = require("../user/user.repository");
const password_1 = require("../../helpers/password");
const jwt_1 = require("../../lib/jwt");
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
//# sourceMappingURL=auth.service.js.map
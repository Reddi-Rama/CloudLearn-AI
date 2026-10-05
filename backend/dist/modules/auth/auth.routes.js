"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.post("/register", auth_controller_1.register);
router.post("/verify-email", auth_controller_1.verifyEmail);
router.post("/resend-otp", auth_controller_1.resendOtp);
router.post("/login", auth_controller_1.login);
router.post("/forgot-password", auth_controller_1.forgotPassword);
router.post("/reset-password", auth_controller_1.resetPasswordController);
router.post("/google", auth_controller_1.googleLogin);
router.post("/refresh", auth_controller_1.refresh);
router.post("/logout", auth_middleware_1.authenticate, auth_controller_1.logout);
router.get("/me", auth_middleware_1.authenticate, auth_controller_1.me);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map
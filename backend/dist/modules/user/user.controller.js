"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
exports.userController = {
    async getMe(req, res, next) {
        try {
            const data = await user_service_1.userService.getMe(req.user.userId);
            res.status(200).json({
                success: true,
                message: 'Profile fetched successfully.',
                data,
            });
        }
        catch (err) {
            next(err);
        }
    },
    async updateMe(req, res, next) {
        try {
            const data = await user_service_1.userService.updateMe(req.user.userId, req.body);
            res.status(200).json({
                success: true,
                message: 'Profile updated successfully.',
                data,
            });
        }
        catch (err) {
            next(err);
        }
    },
    async changePassword(req, res, next) {
        try {
            const result = await user_service_1.userService.changePassword(req.user.userId, req.body);
            res.status(200).json({
                success: true,
                message: result.message,
                data: null,
            });
        }
        catch (err) {
            next(err);
        }
    },
    async deleteMe(req, res, next) {
        try {
            const result = await user_service_1.userService.deleteMe(req.user.userId);
            res.status(200).json({
                success: true,
                message: result.message,
                data: null,
            });
        }
        catch (err) {
            next(err);
        }
    },
};
//# sourceMappingURL=user.controller.js.map
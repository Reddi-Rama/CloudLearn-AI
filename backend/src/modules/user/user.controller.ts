// src/modules/user/user.controller.ts
import { NextFunction, Response } from 'express';
import { AuthRequest } from "../../middleware/auth.middleware";
import { userService } from './user.service';
import { ChangePasswordInput, UpdateProfileInput } from './user.validator';

export const userController = {
  async getMe(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await userService.getMe(req.user!.userId);

      res.status(200).json({
        success: true,
        message: 'Profile fetched successfully.',
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  async updateMe(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const data = await userService.updateMe(req.user!.userId, req.body as UpdateProfileInput);

      res.status(200).json({
        success: true,
        message: 'Profile updated successfully.',
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  async changePassword(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await userService.changePassword(
        req.user!.userId,
        req.body as ChangePasswordInput
      );

      res.status(200).json({
        success: true,
        message: result.message,
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },

  async deleteMe(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const result = await userService.deleteMe(req.user!.userId);

      res.status(200).json({
        success: true,
        message: result.message,
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },
};
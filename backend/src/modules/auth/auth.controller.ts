import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";

import {
  loginUser,
  registerUser,
  getCurrentUser,
  refreshAccessToken,
  logoutUser,
} from "./auth.service";

import {
  createAndSendVerificationOtp,
  verifyEmailOtp,
} from "./email-verification.service";

import { findUserByEmail } from "../user/user.repository";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const { fullName, email, password } = req.body;

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !fullName.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, email and password are required",
      });
    }

    const user = await registerUser(
      fullName.trim(),
      email.trim().toLowerCase(),
      password
    );

    const otpData =
      await createAndSendVerificationOtp(user.id);

    return res.status(201).json({
      success: true,
      message:
        "Registration successful. Verification OTP sent to your email.",
      data: {
        user,
        expiresInMinutes:
          otpData.expiresInMinutes,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
}

export async function verifyEmail(
  req: Request,
  res: Response
) {
  try {
    const { email, otp } = req.body;

    if (
      typeof email !== "string" ||
      typeof otp !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const user =
      await findUserByEmail(
        email.trim().toLowerCase()
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const result =
      await verifyEmailOtp(
        user.id,
        otp.trim()
      );

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        verified: true,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Email verification failed",
    });
  }
}

export async function resendOtp(
  req: Request,
  res: Response
) {
  try {
    const { email } = req.body;

    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user =
      await findUserByEmail(
        email.trim().toLowerCase()
      );

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

    const result =
      await createAndSendVerificationOtp(
        user.id
      );

    return res.status(200).json({
      success: true,
      message: "A new verification OTP has been sent",
      data: {
        expiresInMinutes:
          result.expiresInMinutes,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to resend OTP",
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Login failed",
    });
  }
}

export async function me(
  req: AuthRequest,
  res: Response
) {
  try {
    const user = await getCurrentUser(req.user!.userId);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "User not found",
    });
  }
}

export async function refresh(
  req: Request,
  res: Response
) {
  try {
    const { refreshToken } = req.body;

    const data = await refreshAccessToken(
      refreshToken
    );

    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Refresh failed",
    });
  }
}

export async function logout(
  req: AuthRequest,
  res: Response
) {
  try {
    await logoutUser(req.user!.userId);

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Logout failed",
    });
  }
}

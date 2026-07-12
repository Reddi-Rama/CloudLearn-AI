import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

import {
  loginUser,
  registerUser,
  getCurrentUser,
  refreshAccessToken,
  logoutUser,
} from "../services/auth.service";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const { fullName, email, password } = req.body;

    const user = await registerUser(
      fullName,
      email,
      password
    );

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
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
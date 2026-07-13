import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/user/user.routes";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    success: true,
    message: "CloudLearn API v1",
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
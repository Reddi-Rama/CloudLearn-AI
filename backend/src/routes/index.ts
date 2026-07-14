import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/user/user.routes";
import certificateRoutes from "../modules/certificate/certificate.routes";
const router = Router();

router.get("/", (_, res) => {
  res.json({
    success: true,
    message: "CloudLearn API v1",
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/certificate", certificateRoutes);
export default router;
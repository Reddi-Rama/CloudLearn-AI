import { Router } from "express";
import domainRoutes from "../modules/domain/domain.routes";
import authRoutes from "./auth.routes";
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
router.use("/domains", domainRoutes);
export default router;
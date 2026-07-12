import { Router } from "express";
import domainRoutes from "../modules/domain/domain.routes";
import authRoutes from "./auth.routes";
import userRoutes from "../modules/user/user.routes";
import courseRoutes from "../modules/course/course.routes";
import moduleRoutes from "../modules/module/module.routes";
import lessonRoutes from "../modules/lesson/lesson.routes";
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
router.use("/courses", courseRoutes);
router.use("/modules", moduleRoutes);
router.use("/lessons", lessonRoutes);
export default router;
import { Router } from "express";
import { lessonController } from "./lesson.controller";

const router = Router();

// Create Lesson
router.post("/", lessonController.create);

// Get All Lessons
router.get("/", lessonController.findAll);

// Get Lessons By Module
router.get("/module/:moduleId", lessonController.findByModule);

// Get Single Lesson
router.get("/:id", lessonController.findById);

// Update Lesson
router.put("/:id", lessonController.update);

// Delete Lesson
router.delete("/:id", lessonController.delete);

export default router;
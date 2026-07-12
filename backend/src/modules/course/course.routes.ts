import { Router } from "express";
import { courseController } from "./course.controller";

const router = Router();

// Create Course
router.post("/", courseController.create);

// Get All Courses
router.get("/", courseController.findAll);

// Get Courses By Domain
router.get("/domain/:domainId", courseController.findByDomain);

// Get Single Course
router.get("/:id", courseController.findById);

// Update Course
router.put("/:id", courseController.update);

// Delete Course
router.delete("/:id", courseController.delete);

export default router;
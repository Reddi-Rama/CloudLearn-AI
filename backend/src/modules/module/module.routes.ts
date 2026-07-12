import { Router } from "express";
import { moduleController } from "./module.controller";

const router = Router();

// Create Module
router.post("/", moduleController.create);

// Get All Modules
router.get("/", moduleController.findAll);

// Get Modules By Course
router.get("/course/:courseId", moduleController.findByCourse);

// Get Single Module
router.get("/:id", moduleController.findById);

// Update Module
router.put("/:id", moduleController.update);

// Delete Module
router.delete("/:id", moduleController.delete);

export default router;
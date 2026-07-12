import { Router } from "express";
import { domainController } from "./domain.controller";

const router = Router();

// Create Domain
router.post("/", domainController.create);

// Get All Domains
router.get("/", domainController.findAll);

// Get Single Domain
router.get("/:id", domainController.findById);

// Update Domain
router.put("/:id", domainController.update);

// Delete Domain
router.delete("/:id", domainController.delete);

export default router;
import { Router } from "express";

import {
  createDomain,
  getAllDomains,
  getDomain,
  updateDomain,
  deleteDomain,
} from "./domain.controller";

const router = Router();

// Public Routes
router.get("/", getAllDomains);
router.get("/:id", getDomain);

// Admin Routes (authentication & admin middleware will be added later)
router.post("/", createDomain);
router.put("/:id", updateDomain);
router.delete("/:id", deleteDomain);

export default router;
// Grouped routes definitions mapping endpoints to controller handlers and validation schemas.
import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
const router = Router();
router.post("/login", login);
router.post("/register", register);
export default router;

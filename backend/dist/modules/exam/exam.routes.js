"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const exam_controller_1 = require("./exam.controller");
const router = (0, express_1.Router)();
router.get("/:courseSlug", auth_middleware_1.authenticate, exam_controller_1.examController.getExam);
router.post("/:courseSlug/submit", auth_middleware_1.authenticate, exam_controller_1.examController.submitExam);
router.get("/:courseSlug/result", auth_middleware_1.authenticate, exam_controller_1.examController.getLatestResult);
exports.default = router;
//# sourceMappingURL=exam.routes.js.map
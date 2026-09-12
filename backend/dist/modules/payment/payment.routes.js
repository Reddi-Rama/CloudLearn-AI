"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const payment_controller_1 = require("./payment.controller");
const router = (0, express_1.Router)();
router.post("/create-order", auth_middleware_1.authenticate, payment_controller_1.createOrder);
router.post("/verify", auth_middleware_1.authenticate, payment_controller_1.verifyPayment);
router.get("/enrollment/:courseSlug", auth_middleware_1.authenticate, payment_controller_1.checkEnrollment);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map
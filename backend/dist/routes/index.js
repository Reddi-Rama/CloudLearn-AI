"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../modules/auth/auth.routes"));
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const certificate_routes_1 = __importDefault(require("../modules/certificate/certificate.routes"));
const payment_routes_1 = __importDefault(require("../modules/payment/payment.routes"));
const exam_routes_1 = __importDefault(require("../modules/exam/exam.routes"));
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.json({
        success: true,
        message: "CloudLearn API v1",
    });
});
router.use("/auth", auth_routes_1.default);
router.use("/users", user_routes_1.default);
router.use("/certificate", certificate_routes_1.default);
router.use("/payment", payment_routes_1.default);
router.use("/exam", exam_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
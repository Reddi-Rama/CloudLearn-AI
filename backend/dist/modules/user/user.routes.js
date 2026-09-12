"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "User routes working",
    });
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map
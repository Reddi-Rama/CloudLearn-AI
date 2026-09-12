"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "access_secret";
const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access token missing",
            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, ACCESS_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token",
        });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.middleware.js.map
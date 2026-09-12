"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
/**
 * Security
 */
app.use((0, helmet_1.default)());
/**
 * Compression
 */
app.use((0, compression_1.default)());
/**
 * CORS
 */
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "http://10.240.152.175:3000",
    ],
    credentials: true,
}));
/**
 * Parsers
 */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
/**
 * Logger
 */
app.use((0, morgan_1.default)("dev"));
/**
 * Health Check
 */
app.get("/api/v1/health", (_, res) => {
    res.status(200).json({
        success: true,
        message: "CloudLearn API Running",
        timestamp: new Date(),
    });
});
/**
 * 404
 */
app.use("/api/v1", routes_1.default);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Cannot ${req.method} ${req.originalUrl}`,
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes";
const app = express();

/**
 * Security
 */
app.use(helmet());

/**
 * Compression
 */
app.use(compression());

/**
 * CORS
 */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/**
 * Parsers
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Logger
 */
app.use(morgan("dev"));

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
app.use("/api/v1", routes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

export default app;
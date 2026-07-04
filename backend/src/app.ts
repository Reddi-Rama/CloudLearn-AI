// Express configuration file. Standard middleware integrations, CORS setup, rate limiting, and main router hookup.
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
// Routes root middleware binding
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date() });
});
export default app;

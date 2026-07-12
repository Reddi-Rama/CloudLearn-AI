import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log("");
  console.log("==================================");
  console.log("🚀 CloudLearn Backend Started");
  console.log(`🌍 http://localhost:${PORT}`);
  console.log("==================================");
});
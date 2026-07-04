// App launcher entrypoint. Standard port listening, logger, and server initialization.
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`CloudLearn server running on port ${PORT}`);
});

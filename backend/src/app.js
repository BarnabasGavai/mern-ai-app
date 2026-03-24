import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorMiddleware.js";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

import aiRoutes from "./routes/aiRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* GLOBAL MIDDLEWARES */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(helmet());

/* API ROUTES */

app.use("/api/ai", aiRoutes);

/* SERVE FRONTEND (PRODUCTION) */

app.use(express.static(path.join(__dirname, "../dist")));

/* REACT ROUTER FALLBACK */

app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

/* HEALTH CHECK (optional separate route) */

app.get("/api/health", (req, res) => {
  res.json({
    status: "API running",
  });
});

/* ERROR HANDLER (ALWAYS LAST) */

app.use(errorHandler);

export default app;

import express from "express";

import { askAI, savePrompt, getHistory } from "../controllers/aiController.js";

const router = express.Router();

/* ASK AI */

router.post("/ask", askAI);

/* SAVE PROMPT */

router.post("/save", savePrompt);

/* HISTORY */

router.get("/history", getHistory);

export default router;

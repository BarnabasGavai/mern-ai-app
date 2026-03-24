import aiService from "../services/aiService.js";
import asyncHandler from "../utils/asyncHandler.js";
import Prompt from "../models/Prompt.js";

/* ASK AI */

export const askAI = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  const response = await aiService.getAIResponse(prompt);

  res.status(200).json({
    success: true,

    response,
  });
});

/* SAVE PROMPT */

export const savePrompt = asyncHandler(async (req, res) => {
  const { prompt, response } = req.body;

  const saved = await aiService.savePrompt(prompt, response);

  res.status(201).json({
    success: true,

    data: saved,
  });
});

/* GET HISTORY */

export const getHistory = asyncHandler(async (req, res) => {
  const history = await aiService.getHistory();

  res.json({
    success: true,

    data: history,
  });
});

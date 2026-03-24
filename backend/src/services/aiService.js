import axios from "axios";
import Prompt from "../models/Prompt.js";
import { AI_MODEL, OPENROUTER_URL } from "../config/aiConfig.js";

/* GET AI RESPONSE */

const getAIResponse = async (prompt) => {
  if (!prompt) {
    throw new ApiError("Prompt required", 400);
  }

  const response = await axios.post(
    OPENROUTER_URL,

    {
      model: AI_MODEL,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },

    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

        "Content-Type": "application/json",

        "HTTP-Referer": "http://localhost:5000",

        "X-Title": "MERN AI Flow App",
      },
    },
  );

  const aiText = response.data?.choices?.[0]?.message?.content || "No response";

  return aiText;
};

/* SAVE PROMPT */

const savePrompt = async (prompt, response) => {
  if (!prompt || !response) {
    throw new Error("Prompt and response required");
  }

  const savedPrompt = await Prompt.create({
    prompt,
    response,
  });

  return savedPrompt;
};

/* GET HISTORY */

const getHistory = async () => {
  const history = await Prompt.find().sort({
    createdAt: -1,
  });

  return history;
};

export default {
  getAIResponse,

  savePrompt,

  getHistory,
};

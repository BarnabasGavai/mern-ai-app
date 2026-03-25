# MERN AI Application

A full-stack MERN application that allows users to send prompts to an AI model, visualize the request flow, and store prompt history in a database.

This project demonstrates integration of **React Flow visualization**, **AI API integration**, **MongoDB persistence**, and **production deployment**.

---

# Live Demo

**Deployed Application:**
https://mern-ai-app-qteu.onrender.com

---

# Project Overview

This application allows a user to:

• Enter a prompt inside a visual flow node
• Send the prompt to an AI model
• View the generated response
• Save prompt history
• View previously saved prompts

The application demonstrates proper separation between frontend, backend, database, and AI services.

---

# Tech Stack

## Frontend

• React
• React Flow (flow visualization)
• Axios
• Vite

## Backend

• Node.js
• Express.js
• MongoDB
• Mongoose

## AI Integration

• OpenRouter API
• NVIDIA free AI model (via OpenRouter)

## Deployment

• Render (Backend + Frontend hosting)
• MongoDB Atlas (Database)

---

# Application Architecture

Frontend communicates only with the backend API.

Flow:

React UI
↓
Express API
↓
OpenRouter AI Model
↓
MongoDB Storage
↓
Response returned to UI

---

# Features

## AI Prompt Execution

Users can enter a prompt and execute the flow to receive an AI response.

## Flow Visualization

Implemented using React Flow to visually represent the interaction between input and output nodes.

## Secure API Handling

AI API keys are stored securely in backend environment variables.

## Database Storage

Users can save prompt and response history in MongoDB.

## History Panel

Users can retrieve previously saved prompts.

## Production Deployment

Application is deployed with frontend served from backend build.

---

# Project Structure

```
mern-ai-app/

backend/
├── controllers
├── routes
├── models
├── middleware
├── config
├── server.js
└── package.json

frontend/
├── src
├── components
├── services
├── nodes
├── App.jsx
└── package.json

README.md
```

---

# How To Run Locally

## Backend Setup

Clone repository:

```
git clone <repo-url>
```

Go to backend:

```
cd backend
npm install
```

Create environment file:

```
backend/.env
```

Add:

```
PORT=5000
MONGO_URI=your_mongodb_connection
OPENROUTER_API_KEY=your_key
AI_MODEL=nvidia/free-model-id
```

Run backend:

```
npm run dev
```

---

## Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

# Environment Variables

Backend requires:

```
PORT
MONGO_URI
OPENROUTER_API_KEY
AI_MODEL
```

Never commit `.env`.

Use `.env.example` instead.

---

# AI Model Used

This project uses a **free NVIDIA AI model available through OpenRouter**.

Provider:
OpenRouter

Model:
NVIDIA free model (via OpenRouter platform)

Reason:
• Free tier access
• Fast inference
• Easy integration
• Suitable for demo projects

Documentation:
https://openrouter.ai/docs

---

# API Endpoints

## Ask AI

POST:

```
/api/ai/ask
```

Body:

```
{
  "prompt":"your text"
}
```

Returns:

```
{
  "response":"AI output"
}
```

---

## Save Prompt

POST:

```
/api/ai/save
```

Body:

```
{
  "prompt":"text",
  "response":"ai response"
}
```

---

## Get History

GET:

```
/api/ai/history
```

Returns saved prompts.

---

# Deployment Strategy

Frontend is built and served by Express backend.

Build process:

Frontend build → dist folder → served by Express static middleware.

This ensures:

• Single origin deployment
• No CORS issues
• Production ready structure

---

# Demo Video

https://youtu.be/1KaEVKqg0Q4

The demo shows: [Click here to watch the video](https://youtu.be/1KaEVKqg0Q4)


• Prompt execution
• Database save
• MongoDB record verification

---

# Security Practices

• API keys stored in environment variables
• Backend handles AI requests (not frontend)
• No secrets committed to repository
• Proper separation of concerns

---

# Improvements Possible

• Authentication
• User accounts
• Streaming AI responses
• Better node customization
• Pagination of history


---

# Author

Barnabas Gavai

---

# Notes

This project was created as part of a MERN developer technical evaluation task demonstrating full-stack integration skills.

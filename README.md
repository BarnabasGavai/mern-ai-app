# MERN AI Flow Application

A full-stack MERN application that allows users to send prompts to an AI model, visualize the interaction using a flow interface, and store prompt history in MongoDB.

This project demonstrates full-stack integration of **React**, **Express**, **MongoDB**, **AI APIs**, and **production deployment practices**.

---

# Live Application

**Deployed App:**
https://mern-ai-app-qteu.onrender.com

---

# GitHub Repository

Public repository containing full source code:

https://github.com/BarnabasGavai/mern-ai-app

---

# Project Overview

This application allows users to:

• Enter a prompt inside a visual input node
• Execute the flow to generate an AI response
• View the response inside a result node
• Save prompts and responses
• View saved history from MongoDB

The system follows proper MERN architecture where the frontend communicates only with the backend, and the backend securely interacts with the AI provider.

---

# Tech Stack

## Frontend

• React
• React Flow
• Axios
• Vite

## Backend

• Node.js
• Express.js
• MongoDB
• Mongoose

## AI Integration

• OpenRouter API
• NVIDIA free AI model
(Model used: **nvidia/nemotron-3-nano-30b-a3b:free**)

## Deployment

• Render (Backend + Frontend hosting)
• MongoDB Atlas (Database)

---

# Application Architecture

System flow:

React Frontend
↓
Express Backend API
↓
OpenRouter AI Service
↓
MongoDB Database
↓
Response returned to frontend

Key architectural decisions:

• Frontend never calls AI directly
• Backend protects API keys
• MongoDB stores prompt history
• Express serves React build in production

---

# Features

## AI Prompt Execution

Users can enter prompts and generate AI responses through the backend.

## Flow Visualization

Implemented using React Flow to visually represent the request and response relationship.

## Secure Backend Integration

All AI communication is handled securely through backend APIs.

## MongoDB Storage

Users can save prompt history and retrieve previous interactions.

## History Panel

Allows users to review previously saved prompts.

## Production Ready Deployment

Frontend is built and served by the backend for unified deployment.

---

# Project Structure

```
mern-ai-app/

backend/
├── config/
│   └── db.js
│
├── controllers/
│   └── aiController.js
│
├── models/
│   └── Prompt.js
│
├── routes/
│   └── aiRoutes.js
│
├── middleware/
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── server.js


frontend/
├── src/
│   ├── components/
│   ├── nodes/
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html


README.md
.gitignore
```

---

# How To Run Locally

## Backend Setup

Clone repository:

```
git clone https://github.com/BarnabasGavai/mern-ai-app
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
OPENROUTER_API_KEY=your_openrouter_key
AI_MODEL=nvidia/nemotron-3-nano-30b-a3b:free
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

Frontend runs at:

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

Security note:

Environment files are excluded from Git using `.gitignore`.

---

# API Endpoints

## Run AI Prompt

POST:

```
/api/ai/ask
```

Body:

```
{
  "prompt":"Your text"
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
  "response":"AI output"
}
```

---

## Get History

GET:

```
/api/ai/history
```

Returns saved prompt history.

---

# Deployment Strategy

Deployment follows a unified backend serving approach:

Frontend is built into a production bundle and served by Express static middleware.

Process:

Frontend build → dist folder → Express serves static files

Advantages:

• Single origin deployment
• No CORS problems
• Simpler hosting
• Production friendly architecture

---

# Demo Video

[Youtube Video](https://youtu.be/1KaEVKqg0Q4)
https://youtu.be/1KaEVKqg0Q4

Demo shows:

• Prompt execution
• Flow interaction
• MongoDB save operation
• History retrieval

---

# Security Practices

• AI keys stored in backend environment variables
• No secrets exposed in frontend
• Backend mediates all AI communication
• Sensitive files excluded from Git

---

# Possible Future Improvements

• User authentication
• Multiple flow nodes
• Streaming AI responses
• Pagination for history

---

# Author

Barnabas Gavai

---

# Submission Context

This project was developed as part of a MERN stack developer technical assessment to demonstrate:

• Full stack integration
• API design
• Database usage
• AI service integration
• Deployment understanding

---

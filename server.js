console.log("SERVER STARTING...");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse/lib/pdf-parse.js");
require("dotenv").config();
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

// Confirm API key
console.log("OpenRouter Key Loaded:", process.env.OPENROUTER_API_KEY ? "YES" : "NO");

// ✅ Setup OpenRouter using OpenAI SDK
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

// Multer setup
const upload = multer({
  storage: multer.memoryStorage(),
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Resume analysis route
app.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No resume uploaded" });
    }

    console.log("File received:", req.file.originalname);
    console.log("File size:", req.file.size);

    // ✅ Extract PDF text
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    if (!resumeText || resumeText.trim().length === 0) {
      return res.status(400).json({ error: "Could not extract text from PDF" });
    }

    console.log("Text extracted successfully");

    // ✅ Call OpenRouter
    const response = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Analyze this resume and give professional feedback:\n\n${resumeText}`,
        },
      ],
    });

    res.json({
      analysis: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});


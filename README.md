# AI Resume Analyzer 🚀

An AI-powered Resume Analyzer built using Node.js, Express, PDF parsing, and OpenRouter AI.

This project allows users to upload their resume (PDF) and receive AI-generated professional feedback.

---

## 📌 Features

- 📄 Upload PDF Resume
- 🔍 Extract text from resume
- 🤖 AI-based resume feedback
- 💡 Improvement suggestions
- 🧠 Skill & content analysis

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- pdf-parse
- OpenRouter API (GPT-4o-mini)

### Frontend
- HTML
- CSS
- JavaScript

---

## 📂 Project Structure

```
ai_resume_analyzer/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
│   └── ...
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/Ankt-03/ai_resume_analyzer.git
```

2️⃣ Navigate to backend folder

```bash
cd backend
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Create a `.env` file inside backend folder

```
OPENROUTER_API_KEY=your_api_key_here
```

5️⃣ Start the server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

| Variable | Description |
|----------|------------|
| OPENROUTER_API_KEY | Your OpenRouter API key |

⚠️ Never upload `.env` file to GitHub.

---

## 🚀 Future Improvements

- ATS Score Calculation
- Job Description Matching
- Resume Score (/100)
- Live Deployment
- User Authentication
- Resume Download with AI Suggestions

---

## 👨‍💻 Author

Aniket Deb  
BTech Student | Aspiring AI & App Developer  

---

## ⭐ If You Like This Project

Give it a star on GitHub ⭐

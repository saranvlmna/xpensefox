# 🦊💸  Expense Fox: Smart Expense Management

## 📘 Overview
**Expense Fox** is a modern personal finance management application designed to help users efficiently track, analyze, and optimize their monthly expenses. It provides tools for setting budgets, organizing spending through customizable "expense cards" (like Food, Travel, etc.), and generating insightful analytics. A standout feature is the AI-powered OCR, which allows users to scan receipts and automatically log relevant data.

---

## 🔑 Key Features

### 👤 User Management
- User registration and login (JWT or OAuth)
- Update user profile (name, email, avatar, etc.)
- Delete user account

### 💼 Budget Management
- Set monthly budget targets
- Modify or delete budgets as needed
- Visualize budget vs. actual spending

### 💳 Expense Cards
- Create, edit, or delete categorized expense cards
- Each card tracks expenses under a specific category
- Log expenses with title, amount, date, and optional receipt image
- Automatically calculate the total spend per card

### 📊 Analytics Dashboard
- Monthly breakdown of spending by category
- Comparison between current and previous months
- Alerts when spending exceeds budget limits
- Visual graphs and charts (bar and pie formats)

### 🧠 AI-Powered OCR
- Upload or capture receipt images
- Use **Ollama AI + OCR models** (e.g., `llava`, `tesseract`) to extract text and amounts
- Automatically categorize and assign expenses to the correct card (e.g., "Pizza" → Food card)

---

## 🛠️ Technology Stack

### Backend
- **Node.js** (with Express.js or Nest.js)
- **PostgreSQL** (managed via Sequelize or Prisma ORM)
- **JWT-based authentication** for secure access
- **Ollama AI models** for OCR and intelligent data extraction

### OCR Workflow
- OCR handled using Ollama AI, LLaVA, or tesseract.js
- Preprocessing includes image sharpening, resizing, and grayscale filtering
- Extracted data includes item names and corresponding amounts


# 🧩 EditGuru – Transparent Contribution Tracking in Canva

**EditGuru** is a Canva app extension that makes group collaboration measurable and fair. Built for classrooms, creative teams, and client-facing projects, it tracks **who edited what**, **how much**, and **when** — turning invisible effort into visible insight.

> ⚠️ **Note:** This README focuses solely on the **EditGuru (Edit Tracker)** feature. Other features such as Beat Syncer and Visual Prompt Generator are part of the broader extension project but are not part of this submission.

---

## 🔍 Problem Understanding

Group presentations are often graded or assessed collectively, leaving individual contributions invisible. Instructors, project managers, and teammates have no easy way to tell who participated meaningfully. This results in unfair grading, teammate frustration, and missed opportunities for coaching or recognition.

**EditGuru solves this** by:

* Logging edit type, timestamp, and duration per contributor
* Summarizing engagement across slides
* Flagging low or no participation automatically
* Generating personalized feedback for each team member

---

## 🧠 System Design

The system is designed as a modular React app running inside Canva’s App SDK, with a Flask-based Python backend for future scalability.

### Components

* **`edittracker_tab.tsx`** – Main UI logic with contribution summary, filters, and feedback generator
* **`extension.tsx`** – Registers the EditGuru panel with Canva
* **`my_api.ts`** – Manages mock fetch + backend data integrations
* **`canva_server.py`** – Flask server to support future persistence and API integrations

---

## 🧑‍💻 Code & Design Quality

* Fully typed with TypeScript for maintainability
* Uses Canva’s design system for native UI/UX feel
* Feedback is generated using clear thresholds and edit ratios
* Includes meaningful icons (🟢🟡🔴) for visual clarity
* Modular code with reusable functions like `handleSummarize()` and `formatDuration()`

---

## 🎯 Impact

* **Real-time insight** for instructors and managers
* **Personalized feedback** encourages individual growth
* **Fairness and visibility** promote healthier teamwork
* **Resettable history** makes it reusable across teams/classes

---

## ⚙️ Setup Instructions

This project includes both a **frontend** (React + Canva SDK) and a lightweight **backend** (Python Flask). Below are updated instructions to install, run, and connect both systems correctly.

---

### 🖼️ Frontend (React + Canva App UI Kit)

#### 1. Install Node.js

Make sure Node.js (v16 or higher) is installed:

```bash
node -v
```

If not installed:

* macOS: `brew install node`
* Windows: [Download from nodejs.org](https://nodejs.org/)

#### 2. Install dependencies

```bash
git clone https://github.com/jane-z-zou/editguru.git
cd editguru
npm install
```

#### 3. Start the frontend server

```bash
npm start
```

Expected output:

```
Frontend running on http://localhost:8080
```

#### 4. Register the app in Canva Developer Console

* Go to [Canva Developer Portal](https://www.canva.com/developers/)
* Create a new app and set your `manifest.json`:

```json
{
  "base_url": "http://localhost:8080",
  "entry_point": "extension.tsx"
}
```

* Enable **Dev Mode** to preview your extension in Canva

---

### 🧠 Backend (Flask API server)

> Your Flask backend (`canva_server.py`) runs on **port 5001**
> A secondary backend (if applicable) may run on **port 3001**

#### 1. Install Python

Ensure Python ≥ 3.8 is installed:

```bash
python --version
```

#### 2. Set up virtual environment

```bash
python -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows
```

#### 3. Install dependencies

```bash
pip install flask flask-cors
```

Or:

```bash
pip install -r requirements.txt
```

#### 4. Start the Flask server

```bash
python canva_server.py
```

Expected output:

```
* Running on http://localhost:5001
```

---

### 🔗 Connecting Frontend & Backend

In `my_api.ts`, verify your endpoints point to the correct server:

```ts
const BASE_API = "http://localhost:5001"; // Flask API
```

Your system should now be running:

| Component        | Port                                |
| ---------------- | ----------------------------------- |
| Frontend (React) | `http://localhost:8080`             |
| Backend (Flask)  | `http://localhost:5001`             |
| Secondary API    | `http://localhost:3001` (if needed) |

---

## 🛠 Future Improvements

* Cloud persistence for logs
* Role-based visibility (student vs. instructor)
* Exportable summaries (CSV, PDF)
* AI feedback improvements using NLP

---

## 🔗 Repo

> 🔗 **GitHub Repo:** [https://github.com/jane-z-zou/editguru](https://github.com/jane-z-zou/editguru)

---

## 📣 Credits

Built by **Jane Zou** – PM in Big 4 Tax & Data Science
Created for **Folioworks Challenge for Canva Extensions**

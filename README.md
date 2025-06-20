# 🧩 EditGuru – Transparent Contribution Tracking in Canva

**EditGuru** is a Canva app extension that makes group collaboration measurable and fair. Built for classrooms, creative teams, and client-facing projects, it tracks **who edited what**, **how much**, and **when** — turning invisible effort into visible insight.

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
* Modular code with functions like `handleSummarize()` and `formatDuration()` for readability

---

## 🎯 Impact

* **Real-time insight** for instructors and managers
* **Personalized feedback** encourages individual growth
* **Fairness and visibility** promote healthier teamwork
* **Resettable history** makes it reusable across teams/classes

---

## 🔧 Setup Instructions

### Prerequisites

* Node.js ≥ 16
* Yarn or npm
* Python ≥ 3.8
* Canva Developer Access

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/editguru.git
   cd editguru
   ```

2. Install frontend dependencies:

   ```bash
   yarn install
   ```

3. Start the frontend (Canva Extension):

   ```bash
   yarn dev
   ```

4. Start the backend:

   ```bash
   python canva_server.py
   ```

---

## 🧪 How to Test

1. Launch the Canva extension dev environment.
2. Use the “✨ Try Example” button to simulate edits.
3. Click “📋 Summarize Contributions” to generate the team breakdown.
4. Explore individual feedback under “🎓 Individual Feedback.”
5. Test sort/group/filter logic and the non-contributor toggle.
6. Use “🗑 Refresh History” to clear state and try again.

---

## 🛠 Future Improvements

* Persistence with user-linked edit logs
* Integration with Canva’s native user APIs
* Privacy toggle for “viewer-only” summaries
* Moderator mode to restrict edit logs by role

# 🎮 Gametime RSVP Manager

A simple, scalable RSVP manager built in TypeScript for the Gametime Hero coding challenge. This module helps manage RSVP responses for an event with clean, testable, and modern development practices.

---

## ✨ Features

- ✅ Add or update a player’s RSVP
- ✅ Get a list of confirmed attendees
- ✅ Get RSVP counts (`Yes`, `No`, `Maybe`, `Total`)
- ✅ Simple Logger service injected using Dependency Injection

---

## 🧠 Tech Stack

- Language: **TypeScript**
- Runtime: **Node.js**
- Structure: Clean architecture using **interfaces**, **pure functions**, and **single responsibility**

---

## 📦 File Structure

gametime-rsvp/ ├── dist/ # Compiled JS output ├── src/ │ ├── main.ts # Entry point - test runs and output │ ├── player.ts # Type definitions (Player, RSVP status) │ ├── rsvp-service.ts # Core logic (RsvpService) │ └── logger.ts # Logger class (injected) ├── package.json ├── tsconfig.json └── README.md


---

## 🧪 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Compile TypeScript
npx tsc

# 3. Run the compiled code
node dist/main.js

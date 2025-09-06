# Tip Calculator

## 📖 Overview

A simple tip calculator that helps users quickly compute the total bill including a tip percentage. This project practices DOM manipulation, event handling, and basic arithmetic in JavaScript.

## 🚀 Features

- Enter a bill amount and tip percentage
- Automatically calculates tip amount and total amount (bill + tip)
- Real-time updates as you type
- Clean and minimal UI

## 🛠️ Tech/Concepts Practiced

- DOM manipulation (getElementById, updating input values)
- Event listeners (input event)
- Functions and modular logic
- Arithmetic calculations in JavaScript
- Number formatting with .toFixed(2)

## 📚 Learning Notes

- **Challenge:**
  - I had to ensure invalid inputs (like empty or non-numeric values) didn’t break the calculator.clearly.
- **Solution:**
  - Used parseFloat(...) || 0 as a fallback to handle invalid or empty inputs gracefully.
- **Future Improvements:**
  - Add a “split bill” feature to divide total among multiple people.
  - Improve the UI with better styling and currency formatting.

## ▶️ How to Run

1. Clone the repo
2. Navigate to this project folder
3. Open `index.html

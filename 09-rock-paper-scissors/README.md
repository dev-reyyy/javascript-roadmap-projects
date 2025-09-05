# Rock Paper Scissors

## 📖 Overview

A classic Rock Paper Scissors game where the player competes against the computer. The computer randomly selects Rock, Paper, or Scissors, and the game determines the winner based on the rules.

## 🚀 Features

- Player chooses Rock, Paper, or Scissors
- Computer randomly generates its choice
- Displays the result (Win, Lose, or Draw)
- Highlights the computer’s chosen option in the UI

## 🛠️ Tech/Concepts Practiced

- DOM manipulation
- Event listeners
- Random number generation (Math.random)
- Conditional logic using lookup objects
- Functions for cleaner, reusable code

## 📚 Learning Notes

- **Challenge:**
  - I wasn’t sure at first how to structure the win/lose/draw logic without writing long chains of if/else statements.
  - I also had to figure out how to properly show the computer’s random choice in the UI and make the result message update clearly.
- **Solution:**
  - I simplified the win/lose logic using a small lookup object (winsAgainst) instead of hardcoding every outcome.
  - I added a helper function to display the computer’s choice and reset the UI when the player changes their selection.
- **Future Improvements:**
  - Add a score tracker for both player and computer.
  - Improve the UI by adding images/icons of Rock, Paper, and Scissors to the buttons.

## ▶️ How to Run

1. Clone the repo
2. Navigate to this project folder
3. Open `index.html

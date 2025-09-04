# Temperature Converter

## 📖 Overview

A simple temperature converter app that allows users to convert between Celsius, Fahrenheit, and Kelvin. Enter a value in any field and the other units update instantly.

## 🚀 Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin
- Real-time updates: changing any field updates the others automatically
- Clean and responsive UI

## 🛠️ Tech/Concepts Practiced

- DOM selection and manipulation
- Event listeners (`input` event)
- Functions for conversion logic
- Handling and updating multiple input fields
- Refactoring: from dedicated conversion functions to a more flexible approach

## 📚 Learning Notes

- **Initial Approach:**
  Started with separate functions for each conversion between units.
- **Improvement:**
  Refactored to use a single function that converts any unit to Celsius, then updates the other fields from Celsius for cleaner and more maintainable code.
- **Future Improvements:**
  - Add validation for negative Kelvin values (which are not physically possible)
  - Display conversion formulas for educational purposes
  - Add support for more temperature units (e.g., Rankine)

## ▶️ How to Run

1. Clone the repo
2. Navigate to this project folder
3. Open `index.html

# Background Color Changer

## 📖 Overview

A simple interactive app that changes the background color to a random color each time the button is clicked. The current background color is displayed in RGB format.

## 🚀 Features

- Changes the background color to a random color on button click
- Displays the current background color in RGB format
- Smooth color transition effect

## 🛠️ Tech/Concepts Practiced

- DOM selection and manipulation
- Event listeners (`click` event)
- Generating random numbers
- String interpolation and template literals
- Using both predefined color arrays and dynamic RGB color generation

## 📚 Learning Notes

- **Initial Approach:**
  - At first, I used a predefined array of color names and picked randomly from it.
- **Improvement:**
  - I realized I could generate truly random colors by creating random RGB values (0–255 for each channel), which made the color changes more dynamic and interesting.
- **Future Improvements:**
  - Display the hex code of the current color alongside the RGB code
  - Allow users to click the RGB or hex code to copy it to the clipboard

## ▶️ How to Run

1. Clone the repo
2. Navigate to this project folder
3. Open `index.html` in your browser

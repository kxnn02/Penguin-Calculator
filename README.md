# 🐧 Penguin Calculator

A visually stunning, responsive, and fully functional calculator built with HTML, CSS, and Vanilla JavaScript. This project was designed as a learning journey into responsive web design and complex state management.

![Penguin Calculator Preview](assets/preview.png)

## 🌟 Features

- **Responsive Design:** Viewport-fitting logic ensures the calculator looks great on mobile, tablet, and desktop.
- **Themed UI:** Custom penguin-themed interface using high-quality image assets and "stone-carved" buttons.
- **Core Arithmetic:** Supports Addition, Subtraction, Multiplication, and Division.
- **Smart Logic:** 
  - Prevents multiple decimal points.
  - Handles division by zero with a snarky error message.
  - Supports "chained" operations (e.g., `5 + 5 + 5`).
  - Clear (AC) and Backspace (DEL) functionality.
- **Interactive Feedback:** Hover and click animations for a tactile feel.

## 🛠️ Built With

- **HTML5:** Semantic structure for accessibility.
- **CSS3:** Custom properties (variables), Flexbox, and CSS Grid for a robust layout.
- **JavaScript (ES6):** Pure functions, event listeners, and complex state management.

## 🎓 My Learnings

As a beginner in software engineering, this project taught me several critical concepts:

1. **Responsive Viewport Fitting:** I learned how to use `vh`, `vw`, and `aspect-ratio` to make an image-based UI fit perfectly on any screen without scrolling.
2. **State Management:** Understanding how to track `currentOperand`, `previousOperand`, and the `operation` variable taught me how computers "think" through a process.
3. **The DRY Principle (Don't Repeat Yourself):** Instead of writing 10 listeners for 10 buttons, I used `querySelectorAll` and `forEach` to write the logic once and apply it to many elements.
4. **Git Flow:** I learned how to use feature branches to keep my `main` branch clean and safe while I experimented with new code.
5. **CSS Variables & Theming:** I learned how to use `:root` variables to create a cohesive color palette and layout constants.

## 🚀 Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kxnn02/Penguin-Calculator.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Penguin-Calculator
   ```
3. Open `index.html` in your favorite browser.

---

*Hand-crafted with ❄️ and 🐧 logic.*

# Simple Calculator 🧮

A **React-based calculator application** that performs basic arithmetic operations. Built with React functional components, it utilizes the **useState Hook** for state management and clean, reusable functions for efficient calculations.

## Features ✨

- **Responsive Design**: User-friendly interface optimized for all devices.
- **Basic Arithmetic**: Perform addition, subtraction, multiplication, and division.
- **Dynamic Calculations**: Real-time result updates as you input numbers.
- **Error Handling**: Prevents invalid operations (e.g., division by zero).

---

## Project Overview 🚀

This project demonstrates the use of React to create a fully functional calculator. It focuses on the following key concepts:

1. **React Functional Components**:
   - The entire application is built using functional components, ensuring modularity and reusability.

2. **State Management with `useState` Hook**:
   - The `useState` Hook is used to manage the calculator's state, such as the current input, the result, and the operation selected.

3. **Functions for Logic**:
   - All calculator operations (e.g., addition, subtraction) are implemented as reusable functions for clean and efficient code.

---

## Technologies Used 🛠️

- **React.js**: Frontend library for building the user interface.
- **CSS**: Styling the application for a clean and modern look.

---

## How It Works 🖥️

1. **State Management**:
   - The application maintains three states:
     - `inputValue`: Tracks the current number input by the user.
     - `result`: Stores the calculated result.
     - `operator`: Holds the selected operation.

2. **Functionality**:
   - Each button on the calculator triggers a function, updating the state accordingly.
   - Operators like `+`, `-`, `*`, `/` trigger calculation functions that update the `result` state.
   - Real-time calculations are displayed dynamically.

3. **Error Prevention**:
   - If an invalid operation is attempted (e.g., division by zero), the app displays an error message.

---

## Installation and Usage 🛠️

Follow these steps to run the project locally:

1. **Clone the Repository**:

  ```bash
  git clone https://github.com/your-username/Simple_Calculator.git
  cd Simple_Calculator
  ```

2. **Install Dependencies**:

  ```bash
  npm install
  ```
3. **Start the Application**:

  ```bash
  npm start

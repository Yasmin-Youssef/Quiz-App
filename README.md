# 🧠 Quiz App

An interactive and responsive **Quiz Application** built with **HTML, CSS, Bootstrap, and JavaScript**.

The application allows users to customize their quiz by selecting a **category, difficulty level, and number of questions**, then answer questions interactively and track their score until the end of the quiz.

---

## ✨ Features

* 🎯 Choose the **quiz category**
* ⚡ Select the **difficulty level**
* 🔢 Choose the **number of questions**
* 📚 Get questions dynamically from an external API
* ✅ Instantly identify correct answers
* ❌ Highlight incorrect answers
* 🔒 Disable all answers after selecting an option
* 🏆 Track the user's score throughout the quiz
* 🎉 Display a special result when all answers are correct
* 🔄 Restart the quiz with one click
* ⏳ Loading animation while fetching questions
* 📱 Responsive design for different screen sizes

---

## 🛠️ Technologies Used

* **HTML5** — Structure and semantic markup
* **CSS3** — Styling and custom design
* **Bootstrap 5** — Responsive layout and UI components
* **JavaScript (ES6+)** — Application logic and interactivity
* **OOP** — Classes, constructors, objects, and instances
* **ES Modules** — Organizing JavaScript code into separate modules
* **Fetch API** — Fetching quiz questions from the API
* **Open Trivia DB API** — Providing quiz questions

---

## 🧩 Project Structure

```text
Quiz-App/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── index.js
│   ├── quiz.module.js
│   └── question.module.js
│
└── README.md
```

---

## 🏗️ JavaScript Architecture

The project uses **Object-Oriented Programming** to organize the quiz logic.

### `Quiz` Class

Responsible for:

* Storing the quiz configuration
* Category
* Difficulty
* Number of questions
* Current score
* Fetching questions from the API

### `Questions` Class

Responsible for:

* Managing the current question
* Preparing the answer options
* Displaying the question
* Handling user's answer
* Checking whether the answer is correct
* Updating the score
* Moving to the next question
* Displaying the final result

---

## 🔄 How It Works

```text
Start Quiz
    ↓
Select Category
    ↓
Select Difficulty
    ↓
Select Number of Questions
    ↓
Fetch Questions from API
    ↓
Display Question
    ↓
User Selects an Answer
    ↓
Check Answer
    ↓
Update Score
    ↓
Next Question
    ↓
Final Result
    ↓
Try Again
```

---

## 🌐 API

This project uses **Open Trivia DB** to retrieve quiz questions dynamically.

API Endpoint:

```text
https://opentdb.com/api.php
```

The request is customized according to the user's selected:

* Category
* Difficulty
* Number of questions

---

## 💡 Concepts Practiced

This project was built to practice and strengthen several JavaScript concepts, including:

* Classes & Objects
* Constructors
* Instances
* `this` keyword
* Methods
* Arrays & Array Methods
* Template Literals
* DOM Manipulation
* Event Listeners
* `classList`
* Conditional (Ternary) Operator
* Promises
* `async / await`
* `fetch()`
* ES6 Modules
* Import & Export
* Dynamic HTML Rendering

---

## 🎨 User Experience

The application provides visual feedback while answering:

* 🟢 Green animation for a correct answer
* 🔴 Red animation for an incorrect answer
* 🔒 Answer buttons become disabled after selection
* ⏳ A short transition is used before moving to the next question
* 🏆 A final score is displayed when the quiz ends

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
https://yasmin-youssef.github.io/Quiz-App/
```

### 2. Open the project

Open the project folder in your code editor.

### 3. Run the project

You can use **Live Server** in VS Code or any local development server.

> Because the project uses JavaScript ES Modules and Fetch API, running it through a local server is recommended.

---

## 📸 Screenshots

Add screenshots of your application here to showcase the interface.

```text
Coming Soon...
```

---

## 🔮 Future Improvements

Some possible improvements for future versions:

* Add a countdown timer
* Add a progress bar
* Show the correct answer when the user chooses incorrectly
* Add sound effects
* Add different quiz modes
* Save high scores using `localStorage`
* Add a more detailed results page
* Improve accessibility

---

## 👩🏻‍💻 Author

**Yasmin Usef**

Front-End Developer | JavaScript Learner

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!

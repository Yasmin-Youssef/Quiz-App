//https://opentdb.com/api.php?amount=10&category=21&difficulty=medium
import Quiz from "./quiz.module.js"
import {Questions } from "./question.module.js"
//Form Input
const selectCategory = document.getElementById("selectCategory");
const selectDifficulty = document.getElementById("selectDifficulty");
const numberQuestions = document.getElementById("numberQuestions");
// Form Btn
const startQuizBtn = document.getElementById("startQuizBtn");
//Quiz Form
export const Quiz_form = document.getElementById("Quiz_form");
//Quiz Question Container
export const question_container = document.getElementById("question_container");
//  quiz
export let quiz ;
export const baseUrl = "https://opentdb.com/api.php";
document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
const loader = document.querySelector(".loaderApp");
export let allQuestionArray;
startQuizBtn.addEventListener("click", () => {
    console.log(selectCategory.value, selectDifficulty.value, numberQuestions.value);
    loader.classList.remove("d-none");
    quiz = new Quiz(
        selectCategory.value,
        selectDifficulty.value,
        numberQuestions.value
    ); 
    quiz.getQuiz().then((response) => {
        console.log(response.results);
        allQuestionArray = response.results;
        let question = new Questions(0);
        question.displayQuestion();
        loader.classList.add("d-none");
    })

})
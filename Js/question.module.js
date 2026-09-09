import { allQuestionArray, question_container, Quiz_form, quiz } from "./index.js"
export class Questions {
    constructor(index) {
        this.index = index;
        this.question = allQuestionArray[index].question;
        this.correct_answer = allQuestionArray[index].correct_answer;
        this.answers = [allQuestionArray[index].correct_answer, ...allQuestionArray[index].incorrect_answers].sort()
    }
    displayQuestion() {
        Quiz_form.classList.add("d-none");
        question_container.innerHTML = `
          <div class="d-flex justify-content-around">
                    <p class="ps-4 fw-bold fs-5">Current Question <span class="badge bg_pink">${this.index + 1}</span></p>
                    <p class="ps-4 fw-bold fs-5">Count of Question <span class="badge bg_pink">${allQuestionArray.length}</span></p>
                </div>
                <div class="card">
                    <div class="card_title ps-4 fw-bold fs-3">${this.question}</div>
                    <div class="card_body container">
                        <ul class=" row g-3 mt-1 list-unstyled">
                    ${this.handelQuestionAnswer()}
                        </ul>
                    </div>
                    <div class= "
                     card_footer text-center mb-3 badge bg_pink w-25 m-auto rounded-2 text-white fs-5"><span class="">Score:${quiz.score}</span></div>
                </div>
                `;
        this.handelCorrectAnswer();
    }
    handelQuestionAnswer() {
        return this.answers.map(answer => `<li class=" col-6"><button class="answer btn btn-outline-dark w-100 ">${answer}</button></li>`).join("")
    }
    handelCorrectAnswer() {
        let correctAnswer = document.querySelectorAll(".answer");
        correctAnswer.forEach((btn) => {
            btn.addEventListener("click", () => {
                correctAnswer.forEach((button) => {
                    button.disabled = true;
                });

                if (this.correct_answer === btn.innerHTML) {
                    console.log("correct");
                    btn.classList.add("bg-success", "text-white", "animate__animated", "animate__shakeY");
                    quiz.score++;
                }
                else {
                    btn.classList.add("bg-danger", "text-white", "animate__animated", "animate__shakeX");

                }
                this.handelNextQuestion();

            });
        });
    }
    handelNextQuestion() {
        setTimeout(() => {
            if (this.index + 1 < allQuestionArray.length) {
                new Questions(++this.index).displayQuestion();
            } else {
                this.displayFinallyResult();
            }
        }, 500)

    }
    displayFinallyResult() {
        question_container.innerHTML = `
                   <div class="text-center">
                    <div class= "
                     card_footer"><span class="text-center mb-3 badge bg_pink  rounded-2 text-white fs-5">Score: ${quiz.score} ${quiz.score === allQuestionArray.length ? 'Congratulation🥳' : ''}</span></div>
                     <div onclick="window.location.reload()" ><button class="btn bg-white text-center">Try Again</button></div>
                                     </div></div>
                `;
    }
}



const testContainer = document.querySelector('.test-container');
const testQuestions = document.querySelectorAll('.test-question');
let currentQuestionIndex = 0;

function showNextQuestion() {
  if (currentQuestionIndex < testQuestions.length) {
    testQuestions[currentQuestionIndex].classList.remove('show');
    currentQuestionIndex++;
    if (currentQuestionIndex < testQuestions.length) {
		requestAnimationFrame(() => {
	        testQuestions[currentQuestionIndex].classList.add('show');
	      });
    }
  }
}

testQuestions.forEach(question => {
  question.addEventListener('change', () => {
   showNextQuestion();
  });
});
let data = []
let currentIndex = 0
let result = 0

function fetchAllQuestions(){
  fetch ('brainteasers.json')
  .then (response => response.json())
  .then (json => {
    data = json.questions
    displayQuestion(currentIndex)
  })
}

function displayQuestion(index){
  const question = data[index]
  let displayQuestion = document.getElementById('questiontext')
  displayQuestion.innerHTML = question.question
}


function submitAnswer(userAnswer){
  const questionObject = data[currentIndex]
  const correctAnswer = questionObject.answer
  let button;
  if (userAnswer === "True") {
    button = document.getElementById('trueButton')
  } else {
    button = document.getElementById('falseButton')
  }

  if (correctAnswer === userAnswer){
    result = result + 1
    button.className = 'correct-button'
  } else {
    button.className = 'incorrect-button'
  }

  setTimeout(() => {
    moveToNextQuestion()
  }, 2000)
  
}

function resetButtonStyle() {
  document.getElementById('trueButton').className = 'true-button'
  document.getElementById('falseButton').className = 'false-button'
}


function moveToNextQuestion() {
  resetButtonStyle()
  currentIndex = currentIndex + 1
  displayQuestion(currentIndex)
  if (currentIndex == data.length - 1) {
    alert(`Congratulations, you have come to the end of the brain teasers. 
You scored ${result} out of ${data.length} questions`)
  }
}




window.onload = fetchAllQuestions()
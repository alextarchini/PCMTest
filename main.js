//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

//Possible - Personality Traits
// A - Thinker
// B - Persister
// C - Harmoniser
// D - Imaginer
// E - Rebel
// F - Promoter

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const option5 = document.querySelector(".option5");
const option6 = document.querySelector(".option6");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const restartButton = document.querySelector(".restart");
const result = document.querySelector(".result");

//Function to generate question
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  const option4Total = questions[index].answer4Total;
  const option5Total = questions[index].answer5Total;
  const option6Total = questions[index].answer6Total;
  //Populate html elements
  questionEl.innerHTML = `${index + 1}. ${question.question}`;
  option1.setAttribute("data-total", `${option1Total}`);
  option2.setAttribute("data-total", `${option2Total}`);
  option3.setAttribute("data-total", `${option3Total}`);
  option4.setAttribute("data-total", `${option4Total}`);
  option5.setAttribute("data-total", `${option5Total}`);
  option6.setAttribute("data-total", `${option6Total}`);
  option1.innerHTML = `${question.answer1}`;
  option2.innerHTML = `${question.answer2}`;
  option3.innerHTML = `${question.answer3}`;
  option4.innerHTML = `${question.answer4}`;
  option5.innerHTML = `${question.answer5}`;
  option6.innerHTML = `${question.answer6}`;
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  //Get value of selected radio
  const answerScore = String(
    selectedOption.nextElementSibling.getAttribute("data-total")
  );
  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push();

  /*   const totalScore = score.reduce((total, currentNum) => total + currentNum); */
  //FREQUENCY CALCULATIONS
  totalScore = [];
  totalScore = score;
  var counts = {};

  for (var i = 0; i < totalScore.length; i++) {
    var num = totalScore[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log(
    counts["A"],
    counts["B"],
    counts["C"],
    counts["D"],
    counts["E"],
    counts["F"]
  );

  /* Profile calcs */
  let thinker;
  let persister;
  let harmoniser;
  let imaginer;
  let rebel;
  let promoter;

  thinker = `${Math.floor((counts["A"] / 47) * 100) || 0}`;
  persister = `${Math.floor((counts["B"] / 47) * 100) || 0} `;
  harmoniser = `${Math.floor((counts["C"] / 47) * 100) || 0}`;
  imaginer = `${Math.floor((counts["D"] / 47) * 100) || 0} `;
  rebel = `${Math.floor((counts["E"] / 47) * 100) || 0} `;
  promoter = `${Math.floor((counts["F"] / 47) * 100) || 0} `;

  let ProfilesFn = [
    {
      type: "Thinker",
      number: Number(`${Math.floor((counts["A"] / 47) * 100) || 0}`)
    },
    {
      type: "Persister",
      number: Number(`${Math.floor((counts["B"] / 47) * 100) || 0}`)
    },
    {
      type: "Harmoniser",
      number: Number(`${Math.floor((counts["C"] / 47) * 100) || 0}`)
    },
    {
      type: "Imaginer",
      number: Number(`${Math.floor((counts["D"] / 47) * 100) || 0}`)
    },
    {
      type: "Rebel",
      number: Number(`${Math.floor((counts["E"] / 47) * 100) || 0}`)
    },
    {
      type: "Promoter",
      number: Number(`${Math.floor((counts["A"] / 47) * 100) || 0}`)
    }
  ];

  console.log(ProfilesFn);

  let maxFn = ProfilesFn.reduce((a, b) => {
    let max = a.number > b.number ? a : b;
    return max;
  });
  //console.log(Profiles.{number});

  /* Order sort */

  ProfilesFn.sort(function(a, b) {
    return b.number - a.number;
  });

  for (var i in ProfilesFn) {
    console.log(ProfilesFn[i].type); // Ordering
  }
  /* sort array */
  /*   let Profiles = [];
  Profiles = [thinker, persister, harmoniser, imaginer, rebel, promoter]; */

  /*   max = Math.max(thinker, persister, harmoniser, imaginer, rebel, promoter); */
  /*   max = Profiles.max(); */

  /* var name = "value" */
  /*   console.log(Object.keys({ sort }));  */
  /* PRINT */

  /* total score is a vector with A, B, C, D, E, F */
  totalScore = [
    counts["A"],
    counts["B"],
    counts["C"],
    counts["D"],
    counts["E"],
    counts["F"]
  ];

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  //If the quiz is finished then we hide the questions container and show the results
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";

    result.innerHTML = `<h1 class="final-score">Your Personality Type is: ${maxFn.type} </h1>
    
    <div class="summary">
    <h1>Summary</h1>
    <h2>Possible - Personality Traits, see below for a summary based on your results:</h2>

    `;

    for (var i in ProfilesFn) {
      console.log(ProfilesFn[i].type); // Ordering
      result.innerHTML += `

            <p>${ProfilesFn[i].type}: ${ProfilesFn[i].number}  %  <progress max="100" value="${ProfilesFn[i].number}"></progress></p> 
          
        </div>
    `;
    }

    result.innerHTML += `
    <input  type="button" class ="profileBtn" onclick="window.location.href = './profiles.html';" value="See more details" style="margin: 3rem"/>
        <button class="restart" style="background: #c84630">Restart Quiz</button>
        
         `;
    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches("button")) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
  }
}

generateQuestions(currentQuestion);
nextButton.addEventListener("click", loadNextQuestion);
previousButton.addEventListener("click", loadPreviousQuestion);
result.addEventListener("click", restartQuiz);

console.log(score);


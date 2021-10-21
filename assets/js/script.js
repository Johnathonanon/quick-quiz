// Questions array
const questionArray = [{
        "question": "How many days in a fortnight?",
        "choices": ["14", "7", "21", "365"],
        "correct": "14",
    },
    {
        "question": "What is the capital city of Ireland?",
        "choices": ["London", "Madrid", "Dublin", "Sydney"],
        "correct": "Dublin",
    },
    {
        "question": "Which of these is a prime number?",
        "choices": ["8", "20", "45", "3"],
        "correct": "3",
    },
    {
        "question": "Red, Yellow, and ____ are the 3 primary colours?",
        "choices": ["Blue", "Purple", "Green", "Orange"],
        "correct": "Blue",
    },
    {
        "question": "In which country would you find the Eiffel Tower?",
        "choices": ["Ireland", "France", "Sweden", "China"],
        "correct": "France",
    },
    {
        "question": "What does the Spanish word 'espada' mean?",
        "choices": ["Snail", "Car", "House", "Sword"],
        "correct": "Sword",
    },
    {
        "question": "The word 'arachnid' most commonly refers to which household insect?",
        "choices": ["Fly", "Ant", "Moth", "Spider"],
        "correct": "Spider",
    },
    {
        "question": "Who was the 16th president of the United States?",
        "choices": ["Andrew Johnson", "Grover Cleveland", "Abraham Lincoln", "Franklin D. Roosevelt"],
        "correct": "Abraham Lincoln",
    },
    {
        "question": "In biology what is generally known as the 'powerhouse of the cell'?",
        "choices": ["Cytoplasm", "Mitochondria", "Ribosomes", "Nucleus"],
        "correct": "Mitochondria",
    },
    {
        "question": "What is the modern name of the state of Rhodesia?",
        "choices": ["Zimbabwe", "Tanzania", "Zambia", "Botswana"],
        "correct": "Zimbabwe",
    },
    {
        "question": "What year did Vincent Van Gogh die?",
        "choices": ["1888", "1798", "1844", "1890"],
        "correct": "1890",
    },
    {
        "question": "Which English city was once known as Duroliponte?",
        "choices": ["London", "Oxford", "Cambridge", "Nottingham"],
        "correct": "Cambridge",
    },
    {
        "question": "How many faces does a dodecahedron have?",
        "choices": ["10", "100", "16", "12"],
        "correct": "12",
    },
    {
        "question": "How many people have so far walked on the moon?",
        "choices": ["12", "2", "8", "20"],
        "correct": "12",
    },
    {
        "question": "Who is said to have 'fiddled while Rome burned'?",
        "choices": ["Brutus", "Augustus", "Nero", "Hannibal"],
        "correct": "Nero",
    },
    {
        "question": "Who wrote The Old Man and the Sea?",
        "choices": ["Ernest Hemingway", "Mark Twain", "John Steinbeck", "F. Scott Fitzgerald"],
        "correct": "Ernest Hemingway",
    },
    {
        "question": "Who is the most successful Olympian of all time?",
        "choices": ["Mark Spitz", "Usain Bolt", "Michael Phelps", " Larisa Latynina"],
        "correct": "Michael Phelps",
    },
    {
        "question": "Which Tennis Grand Slam is played on a clay surface?",
        "choices": ["The Australian Open", "Wimbledon", "The French Open", "The US Open"],
        "correct": "The French Open",
    },
    {
        "question": "From what grain is the Japanese spirit Sake made?",
        "choices": ["Rice", "Wheat", "Barley", "Rye"],
        "correct": "Rice",
    },
    {
        "question": "Who is rumoured to 'live in a pinapple under the sea'?",
        "choices": ["Roger Rabbit", "Fred Flintstone", "Homer Simpson", "Spongebob Squarepants"],
        "correct": "Spongebob Squarepants",
    },
];

// Array to store previously generated questions
let usedQuestions = [];

// User score variable
let score = 0;

// Declaration of random question from questionArray
let randomQuestion;

/**
 * Generates questions and answers and displays to page
 */
function runQuiz() {
    randomQuestion = questionArray.splice(Math.floor(Math.random() * questionArray.length), 1)[0];
    let userQuestion = randomQuestion.question;
    let userChoices = randomQuestion.choices;

    setTimeout(function () {
        document.getElementById("question").textContent = userQuestion;
        document.getElementById("a1").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
        document.getElementById("a2").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
        document.getElementById("a3").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
        document.getElementById("a4").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);

        usedQuestions.push(randomQuestion);
    }, 500);
}

/**
 * Runs at completion of quiz. Displays user score and prompts user to replay
 */
function finishQuiz() {
    const username = document.getElementById("username").value;

    setTimeout(function () {
        document.getElementById("message").style.fontSize = "100%";
        document.getElementById("message-area").innerHTML = `
        <p id="message">Well done on completing the quiz ${username}!!</p>
         <br> 
         <p>You scored: ${score}/20.</p>
         <br> 
         <p>Click the button below if you'd like to play again</p>
         <br>
         <button class="button" id="refresh" onclick="refreshQuiz()">Play Again!</button>
         `;
        document.getElementById("message-area").style.margin = "10% auto";
        document.getElementById("question-area").style.display = "none";
        document.getElementById("answer-area").style.display = "none";
    }, 1000);
}

/**
 * Checks answer, user progress, and calls incrementScore for correct answers
 * @param {Event} ev Click event details when called by answer button click
 */
// Input given by mentor on this function
function checkAnswer(ev) {
    if (ev.target.innerHTML === randomQuestion.correct) {
        incrementScore();
    }
    if (questionArray.length === 0) {
        finishQuiz();
    } else {
        runQuiz();
    }
}

/**
 * Increments score starting at 0
 */
function incrementScore() {
    score++;
}

/**
 * Creates and validates username, displays quiz areas on user input - clicking confirm
 */
document.getElementById("confirm").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    // function not working correctly, fixed after mentor input
    if (username === "") {
        alert("Please enter a valid username");
    } else {
        document.getElementById("message").textContent = `Welcome ${username}! Lets Begin!`;
        document.getElementById("username").style.display = "none";
        document.getElementById("confirm").style.display = "none";
        document.getElementById("input-label").style.display = "none";
        setTimeout(function () {
            document.getElementById("message").style.fontSize = "80%";
            document.getElementById("message").textContent = `Please read the question carefully and select the correct answer from the choices below`;
            document.getElementById("message-area").style.margin = "auto";
            document.getElementById("question-area").style.display = "block";
            document.getElementById("answer-area").style.display = "block";
        }, 2000);
    }
    runQuiz();
});

/**
 * Reloads quiz on user input
 */
function refreshQuiz() {
    window.location.reload();
}

// Event listeners for user answer input and progression of quiz
document.getElementById("a1").addEventListener("click", checkAnswer);
document.getElementById("a2").addEventListener("click", checkAnswer);
document.getElementById("a3").addEventListener("click", checkAnswer);
document.getElementById("a4").addEventListener("click", checkAnswer);
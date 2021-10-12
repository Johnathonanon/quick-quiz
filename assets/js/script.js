// Questions array

const questionArray = [{
        "difficulty": "easy",
        "question": "How many days in a fortnight?",
        "correctAnswer": "14",
        "wrongAnswers": ["7", "21", "365"]
    },
    {
        "difficulty": "easy",
        "question": "What is the capital city of Ireland?",
        "correctAnswer": "Dublin",
        "wrongAnswers": ["London", "Madrid", "Sydney"]
    },
    {
        "difficulty": "easy",
        "question": "Which of these is a prime number?",
        "correctAnswer": "3",
        "wrongAnswers": ["8", "20", "45"]
    },
    {
        "difficulty": "easy",
        "question": "Red, Yellow, and ____ are the 3 primary colours?",
        "correctAnswer": "Blue",
        "wrongAnswers": ["Purple", "Green", "Orange"]
    },
    {
        "difficulty": "easy",
        "question": "In which country would you find the Eiffel Tower?",
        "correctAnswer": "France",
        "wrongAnswers": ["Ireland", "Sweden", "China"]
    },
    {
        "difficulty": "medium",
        "question": "What does the Spanish word 'espada' mean?",
        "correctAnswer": "Sword",
        "wrongAnswers": ["Snail", "Car", "House"]
    },
    {
        "difficulty": "medium",
        "question": "The word 'arachnid' most commonly refers to which household insect?",
        "correctAnswer": "Spider",
        "wrongAnswers": ["Fly", "Ant", "Moth"]
    },
    {
        "difficulty": "medium",
        "question": "Who was the 16th president of the United States?",
        "correctAnswer": "Abraham Lincoln",
        "wrongAnswers": ["Andrew Johnson", "Grover Cleveland", "Franklin D. Roosevelt"]
    },
    {
        "difficulty": "medium",
        "question": "In biology what is generally known as the 'powerhouse of the cell'?",
        "correctAnswer": "Mitochondria",
        "wrongAnswers": ["Cytoplasm", "Ribosomes", "Nucleus"]
    },
    {
        "difficulty": "medium",
        "question": "What is the modern name of the state of Rhodesia?",
        "correctAnswer": "Zimbabwe",
        "wrongAnswers": ["Tanzania", "Zambia", "Botswana"]
    },
    {
        "difficulty": "hard",
        "question": "What year did Vincent Van Gogh die?",
        "correctAnswer": "1890",
        "wrongAnswers": ["1888", "1798", "1844"]
    },
    {
        "difficulty": "hard",
        "question": "Which English city was once known as Duroliponte?",
        "correctAnswer": "Cambridge",
        "wrongAnswers": ["London", "Oxford", "Nottingham"]
    },
    {
        "difficulty": "hard",
        "question": "How many faces does a dodecahedron have?",
        "correctAnswer": "12",
        "wrongAnswers": ["10", "100", "16"]
    },
    {
        "difficulty": "hard",
        "question": "How many people have so far walked on the moon?",
        "correctAnswer": "12",
        "wrongAnswers": ["2", "8", "20"]
    },
    {
        "difficulty": "hard",
        "question": "Who is said to have 'fiddled while Rome burned'?",
        "correctAnswer": "Nero",
        "wrongAnswers": ["Brutus", "Augustus", "Hannibal"]
    }
];

// Creates and validates username, displays quiz areas on user input

document.getElementById("confirm").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    if (username === "") {
        alert("Please enter a valid username");
    } else {
        document.getElementById("message").textContent = `Welcome ${username}! Lets Begin!`;
        document.getElementById("username").remove();
        document.getElementById("confirm").remove();
        setTimeout(function () {
            document.getElementById("message").style.fontSize = "80%";
            document.getElementById("message").textContent = `Please read the question carefully and select the correct answer from the choices below`;
            document.getElementById("welcome-area").style.margin = "auto";
            document.getElementById("question-area").style.display = "block";
            document.getElementById("answer-area").style.display = "block";
            document.getElementById("next").style.display = "block";
        }, 2000);
    }
});

// Generates questions and answers

function runQuiz () {
    let randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
    let userQuestion = randomQuestion.question;
    let answer = randomQuestion.correctAnswer;
    let wrongArray = randomQuestion.wrongAnswers;
    document.getElementById("question").textContent = userQuestion;
    console.log(userQuestion, answer, wrongArray);
}

runQuiz();
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
        "choices": ["Roger Rabbit", "Fred Flintstone", "Homer Simpson", "Spongbob Squarepants"],
        "correct": "Spongebob Squarepants",
    },
];

// Array to store previously generated questions

let usedQuestions = [];

// Score variable

let score = 0;

// Generates questions and answers and displays to page

function runQuiz() {

    let randomQuestion = questionArray.splice(Math.floor(Math.random() * questionArray.length), 1)[0];
    let userQuestion = randomQuestion.question;
    let answer = randomQuestion.correct;
    let userChoices = randomQuestion.choices;

    usedQuestions.push(randomQuestion);

    document.getElementById("question").textContent = userQuestion;
    document.getElementById("a1").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
    document.getElementById("a2").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
    document.getElementById("a3").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
    document.getElementById("a4").textContent = userChoices.splice(Math.floor(Math.random() * userChoices.length), 1);
    checkAnswer();
};

// Function checks answer and user progress
function checkAnswer() {
    console.log("Correct");
}

// Allows runQuiz function to run on page load

window.addEventListener("DOMContentLoaded", runQuiz);

// Creates and validates username, displays quiz areas on user input

document.getElementById("confirm").addEventListener("click", function () {

    let username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter a valid username");
    } else {
        document.getElementById("message").textContent = `Welcome ${username}! Lets Begin!`;
        document.getElementById("username").remove();
        document.getElementById("confirm").remove();
        document.getElementById("input-label").remove();
        setTimeout(function () {
            document.getElementById("message").style.fontSize = "80%";
            document.getElementById("message").textContent = `Please read the question carefully and select the correct answer from the choices below`;
            document.getElementById("welcome-area").style.margin = "auto";
            document.getElementById("question-area").style.display = "block";
            document.getElementById("answer-area").style.display = "block";
        }, 2000);
    }
});

// Event listeners for user answer input

document.getElementById("a1").addEventListener("click", runQuiz);
document.getElementById("a2").addEventListener("click", runQuiz);
document.getElementById("a3").addEventListener("click", runQuiz);
document.getElementById("a4").addEventListener("click", runQuiz);
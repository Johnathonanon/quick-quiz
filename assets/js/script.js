// Questions array
let questions = [{
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
            "question": "?",
            "correctAnswer": "",
            "wrongAnswers": ["", "21", "365"]
        },
        {
            "difficulty": "easy",
            "question": "What is the capital city of Ireland?",
            "correctAnswer": "Dublin",
            "wrongAnswers": ["London", "Madrid", "Sydney"]
        },
        {
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
            "question": "How many days in a fortnight?",
            "correctAnswer": "14",
            "wrongAnswers": ["7", "21", "365"]
        },
        {
            "difficulty": "easy",
            "question": "What is the capital city of Ireland?",
            "correctAnswer": "Dublin",
            "wrongAnswers": ["London", "Madrid", "Sydney"]
        }];


        // Allows input of username and difficulty choice
        document.getElementById("enter").addEventListener("click", function () {
            let username = document.getElementById("username").value;
            if (username === "") {
                alert("Please enter a valid username");
            } else {
                document.getElementById("message").innerHTML = `
                <p>Hi ${username}! Please choose a difficulty</p>
                <button id="easy" class="button">Easy</button>
                <button id="medium" class="button">Medium</button>
                <button id="hard" class="button">Hard</button>
                `;
                document.getElementById("username").remove();
                document.getElementById("enter").remove();
            }
        });
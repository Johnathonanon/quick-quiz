// Allows input of username and difficulty choice
document.getElementById("enter").addEventListener("click", function() {
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
}});



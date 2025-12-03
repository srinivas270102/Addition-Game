let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInputNum = document.getElementById("userInput");
let paragraphElement = document.getElementById("gameResult");

function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);

    firstNumber.textContent = firstRandomNumber;
    secondNumber.textContent = secondRandomNumber;

    paragraphElement.textContent = "";
    paragraphElement.style.backgroundColor = "#f5f7fa";
    userInputNum.value = "";
}

function checkResult() {
    let firstRandomInteger = parseInt(firstNumber.textContent);
    let secondRandomInteger = parseInt(secondNumber.textContent);
    let valueTobecheck = parseInt(userInputNum.value);

    if (firstRandomInteger + secondRandomInteger === valueTobecheck) {
        paragraphElement.style.backgroundColor = "#028a0f";
        paragraphElement.textContent = "Congratulations! You got it right.";
    } else {
        paragraphElement.style.backgroundColor = "#1e217c";
        paragraphElement.textContent = "Please Try Again.";
    }
}

// Initialize the game on page load
restartGame();

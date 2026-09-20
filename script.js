function calculatePercentage() {
    let number = document.getElementById("number").value;
    let percentage = document.getElementById("percentage").value;

    if (number === "" || percentage === "") {
        document.getElementById("percentageResult").innerHTML =
            "Please enter both numbers.";
        return;
    }

    let result = (number * percentage) / 100;

    document.getElementById("percentageResult").innerHTML =
        "Result: " + result;
}

function countWords() {
    let text = document.getElementById("textInput").value;

    let words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    let characters = text.length;

    document.getElementById("counterResult").innerHTML =
        "Words: " + words + "<br>Characters: " + characters;
}

function generatePassword() {
    let length = document.getElementById("passwordLength").value;

    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

    let password = "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    document.getElementById("passwordResult").innerHTML =
        "Your password: <b>" + password + "</b>";
  }  function searchTools() {
    let search = document.getElementById("toolSearch").value.toLowerCase();
    let tools = document.querySelectorAll(".tool");

    tools.forEach(function(tool) {
        let text = tool.innerText.toLowerCase();

        if (text.includes(search)) {
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }
    });
}
function copyPassword() {
    let passwordText = document.getElementById("passwordResult").innerText;

    if (passwordText === "") {
        alert("Generate a password first.");
        return;
    }

    let password = passwordText.replace("Your password: ", "");

    navigator.clipboard.writeText(password);

    alert("Password copied!");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function calculateAge() {
    let birthDate = document.getElementById("birthDate").value;

    if (birthDate === "") {
        document.getElementById("ageResult").innerHTML =
            "Please select your date of birth.";
        return;
    }

    let today = new Date();
    let birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    let monthDifference = today.getMonth() - birth.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerHTML =
        "Your age is: <b>" + age + " years</b>";
}
function convertKilometers() {
    let kilometers = document.getElementById("kilometers").value;

    if (kilometers === "") {
        document.getElementById("conversionResult").innerHTML =
            "Please enter kilometers.";
        return;
    }

    let miles = kilometers * 0.621371;

    document.getElementById("conversionResult").innerHTML =
        kilometers + " km = <b>" + miles.toFixed(2) + " miles</b>";
}
let stopwatchSeconds = 0;
let stopwatchInterval = null;

function startStopwatch() {
    if (stopwatchInterval !== null) {
        return;
    }

    stopwatchInterval = setInterval(function() {
        stopwatchSeconds++;

        let hours = Math.floor(stopwatchSeconds / 3600);
        let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
        let seconds = stopwatchSeconds % 60;

        document.getElementById("stopwatchDisplay").innerHTML =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchSeconds = 0;

    document.getElementById("stopwatchDisplay").innerHTML = "00:00:00";
}
function calculateResult() {
    let number1 = document.getElementById("calcNumber1").value;
    let number2 = document.getElementById("calcNumber2").value;
    let operator = document.getElementById("calcOperator").value;

    if (number1 === "" || number2 === "") {
        document.getElementById("calculatorResult").innerHTML =
            "Please enter both numbers.";
        return;
    }

    number1 = Number(number1);
    number2 = Number(number2);

    let result;

    if (operator === "+") {
        result = number1 + number2;
    } else if (operator === "-") {
        result = number1 - number2;
    } else if (operator === "*") {
        result = number1 * number2;
    } else if (operator === "/") {
        if (number2 === 0) {
            document.getElementById("calculatorResult").innerHTML =
                "Cannot divide by zero.";
            return;
        }

        result = number1 / number2;
    }

    document.getElementById("calculatorResult").innerHTML =
        "Result: <b>" + result + "</b>";
}

function clearCalculator() {
    document.getElementById("calcNumber1").value = "";
    document.getElementById("calcNumber2").value = "";
    document.getElementById("calcOperator").value = "+";
    document.getElementById("calculatorResult").innerHTML = "";
}
function calculateDateDifference() {
    let date1 = document.getElementById("date1").value;
    let date2 = document.getElementById("date2").value;

    if (date1 === "" || date2 === "") {
        document.getElementById("dateDifferenceResult").innerHTML =
            "Please select both dates.";
        return;
    }

    let firstDate = new Date(date1);
    let secondDate = new Date(date2);

    let difference = Math.abs(secondDate - firstDate);

    let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.getElementById("dateDifferenceResult").innerHTML =
        "Difference: <b>" + days + " days</b>";
}
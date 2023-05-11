// input elements
const numberButton = document.querySelectorAll("#button")
const displayScreen = document.getElementById("input")

let thisCalculation = []
let thisJoinedCalculation
let solution
let runningCalculation = []
let operators = ["+", "-", "*", "/"]


function addComma(num) {
    if (num === null) return;
    return (
        num
            .toString()
            .split("")
            .reverse()
            .map((digit, index) =>
                index != 0 && index % 3 === 0 ? `${digit},` : digit
            )
            .reverse()
            .join("")
    );
}

function calculate(input) {
    //    clear function
    if (input === 'C') {
        runningCalculation = [0]
        thisCalculation = [0]
        thisJoinedCalculation = 
        solution = [0]
        displayScreen.textContent = "CLEARED"
    } else if (operators.includes(input)) {
        // checks if operator was already pressed, if you want to change operator pressing another one will swap them out before continuing the calculation
        if (runningCalculation.length === 2) {
            runningCalculation[1] = input
        } else {
            console.log(`operator ${input} pressed`)
            runningCalculation.push(thisJoinedCalculation)
            thisJoinedCalculation = runningCalculation.join('')
            solution = eval(thisJoinedCalculation)
            runningCalculation = [solution, input]
            thisCalculation = []
            thisJoinedCalculation = []
            displayScreen.textContent = addComma(solution)
        }

    } else if (input === "=") {
// shows error message on screen if you attempt to resolve unfinished calculation
        if (thisJoinedCalculation.length === 0) {
            displayScreen.textContent = "ERROR"
        } else if (displayScreen.textContent === "CLEARED") {
            return;
        } else {
            runningCalculation.push(thisJoinedCalculation)
            thisJoinedCalculation = runningCalculation.join('')
            solution = eval(thisJoinedCalculation)
            runningCalculation = [solution]
            thisCalculation = []
            thisJoinedCalculation = []
            displayScreen.textContent = addComma(solution)
        }
    } else {
        thisCalculation.push(input)
        thisJoinedCalculation = thisCalculation.join('')
        displayScreen.textContent = addComma(thisJoinedCalculation)
    }
    console.log(thisCalculation, thisJoinedCalculation, runningCalculation)
}


// maps number buttons, assigns event listeners to them
// runs the appendDigit function, passing in number retrieved from the buttons HTML
numberButton.forEach(button => button.addEventListener("click", () => {
    calculate(button.textContent)
}))
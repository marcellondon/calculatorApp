// input elements
const numberButton = document.querySelectorAll("#button")
const displayScreen = document.getElementById("input")

let thisCalculation = []
let thisJoinedCalculation
let solution
let runningCalculation = []
let operators = ["+", "-", "*", "/"]


function addCommasToNumber(number) {
    // Convert the number to a string
    let numStr = number.toString();
  
    // Split the number into integer and decimal parts
    let parts = numStr.split('.');
  
    // Format the integer part
    let integerPart = parts[0];
    let integerFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Combine the integer and decimal parts (if present)
    let formattedNumber = parts.length > 1 ? integerFormatted + '.' + parts[1] : integerFormatted;
  
    return formattedNumber;
  }

function calculate(input) {
    //    clear function
    if (input === 'C') {
        runningCalculation = []
        thisCalculation = []
        thisJoinedCalculation = []
            solution = []
        displayScreen.textContent = "CLEARED"
    } else if (operators.includes(input)) {
        if (thisJoinedCalculation.length === 0 && runningCalculation.length === 0) return;
        // checks if operator was already pressed, if you want to change operator pressing another one will swap them out before continuing the calculation
        if (runningCalculation.length === 2) {
            runningCalculation[1] = input
            console.log(`operator switched to ${input}`)
        } else {
            console.log(`operator ${input} pressed`)
            runningCalculation.push(thisJoinedCalculation)
            thisJoinedCalculation = runningCalculation.join('')
            solution = eval(thisJoinedCalculation)
            runningCalculation = [solution, input]
            thisCalculation = []
            thisJoinedCalculation = []
            displayScreen.textContent = addCommasToNumber(solution)
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
            displayScreen.textContent = addCommasToNumber(solution)
        }
    } else {
        thisCalculation.push(input)
        thisJoinedCalculation = thisCalculation.join('')
        displayScreen.textContent = addCommasToNumber(thisJoinedCalculation)
    }
}


// maps number buttons, assigns event listeners to them
// runs the appendDigit function, passing in number retrieved from the buttons HTML
numberButton.forEach(button => button.addEventListener("click", () => {
    calculate(button.textContent)
}))
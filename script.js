// input elements
const numberButton = document.querySelectorAll("#button")
const displayScreen = document.getElementById("input")

let thisCalculation = []
let thisJoinedCalculation
let solution
let runningCalculation = []


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
        runningCalculation = []
        thisCalculation = []
        thisJoinedCalculation = 
        solution = 
        displayScreen.textContent = "CLEARED"
    } else if (input === '+') {
        // running calc string is pushed into operand
        console.log(`operator ${input} pressed`)
        runningCalculation.push(thisJoinedCalculation)
        thisJoinedCalculation = runningCalculation.join('')
        solution = eval(thisJoinedCalculation)
        runningCalculation = [solution, input]
        thisCalculation = []
        thisJoinedCalculation = []
        displayScreen.textContent = addComma(solution)
    } else if (input === '-') {
        console.log(`operator ${input} pressed`)
        runningCalculation.push(thisJoinedCalculation)
        thisJoinedCalculation = runningCalculation.join('')
        solution = eval(thisJoinedCalculation)
        runningCalculation = [solution, input]
        thisCalculation = []
        thisJoinedCalculation = []
        displayScreen.textContent = addComma(solution)
    } else if (input === '*') {
        console.log(`operator ${input} pressed`)
        runningCalculation.push(thisJoinedCalculation)
        thisJoinedCalculation = runningCalculation.join('')
        solution = eval(thisJoinedCalculation)
        runningCalculation = [solution, input]
        thisCalculation = []
        thisJoinedCalculation = []
        displayScreen.textContent = addComma(solution)
    } else if (input === '/') {
        console.log(`operator ${input} pressed`)
        runningCalculation.push(thisJoinedCalculation)
        thisJoinedCalculation = runningCalculation.join('')
        solution = eval(thisJoinedCalculation)
        runningCalculation = [solution, input]
        thisCalculation = []
        thisJoinedCalculation = []
        displayScreen.textContent = addComma(solution)
    } else if (input === "=") {
        console.log(`operator ${input} pressed`)
        runningCalculation.push(thisJoinedCalculation)
        thisJoinedCalculation = runningCalculation.join('')
        solution = eval(thisJoinedCalculation)
        runningCalculation = [solution]
        thisCalculation = []
        thisJoinedCalculation = []
        displayScreen.textContent = addComma(solution)
    } else {
        thisCalculation.push(input)
        thisJoinedCalculation = thisCalculation.join('')
        displayScreen.textContent = addComma(thisJoinedCalculation)
    }
}

// maps number buttons, assigns event listeners to them
// runs the appendDigit function, passing in number retrieved from the buttons HTML
numberButton.forEach(button => button.addEventListener("click", () => {
    calculate(button.textContent)
}))
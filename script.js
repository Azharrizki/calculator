const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equalSign = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".all-clear");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const updateScreen = (number) => {
	calculatorScreen.value = number;
};

const inputNumber = (number) => {
	if (currentNumber === "0") {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
};

const inputOperator = (operator) => {
	if (calculationOperator === "") {
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = "0";
};

const inputDecimal = (dot) => {
	if (currentNumber.includes(".")) {
		return;
	}
	currentNumber += dot;
};

const calculate = () => {
	let result = "";
	switch (calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			return;
	}
	currentNumber = result;
	calculationOperator = "";
};

const clearAll = () => {
	prevNumber = "";
	calculationOperator = "";
	currentNumber = "0";
};

decimal.addEventListener("click", (e) => {
	inputDecimal(e.target.value);
	updateScreen(currentNumber);
});

clearButton.addEventListener("click", () => {
	clearAll();
	updateScreen(currentNumber);
});

equalSign.addEventListener("click", () => {
	calculate();
	updateScreen(currentNumber);
});

numbers.forEach((number) => {
	number.addEventListener("click", (e) => {
		inputNumber(e.target.value);
		updateScreen(currentNumber);
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		inputOperator(e.target.value);
	});
});

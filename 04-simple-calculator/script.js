const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const operationSelect = document.getElementById("operationSelect");
const calculateBtn = document.getElementById("calculateBtn");
const resultField = document.getElementById("resultField");

const operations = {
	add: (a, b) => a + b,
	minus: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => a / b,
};

calculateBtn.addEventListener("click", () => {
	const rawValue1 = parseFloat(num1.value);
	const rawValue2 = parseFloat(num2.value);

	const value1 = Number.isNaN(rawValue1) ? 0 : rawValue1;
	const value2 = Number.isNaN(rawValue2) ? 0 : rawValue2;

	// Version 1: Switch Case
	/*
	let result = 0;

	switch (operationSelect.value) {
		case "add":
			result = value1 + value2;
			break;
		case "minus":
			result = value1 - value2;
			break;
		case "multiply":
			result = value1 * value2;
			break;
		case "divide":
			result = value1 / value2;
			break;

		default:
			result = "Invalid Operation";
			break;
	}
	*/

	const operation = operations[operationSelect.value];
	const result = operation ? operation(value1, value2) : "Invalid Operation";

	resultField.value = result;
});

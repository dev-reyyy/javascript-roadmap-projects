const celsiusField = document.getElementById("celsius");
const fahrenheitField = document.getElementById("fahrenheit");
const kelvinField = document.getElementById("kelvin");

celsiusField.addEventListener("input", () => {
	updateFrom("celsius", +celsiusField.value);
});

fahrenheitField.addEventListener("input", () => {
	updateFrom("fahrenheit", +fahrenheitField.value);
});

kelvinField.addEventListener("input", () => {
	updateFrom("kelvin", +kelvinField.value);
});

function updateFrom(unit, value) {
	let celsius = convertToCelsius(unit, value);
	celsiusField.value = parseFloat(celsius.toFixed(1));
	updateFromCelsius(celsius);
}

function convertToCelsius(unit, value) {
	if (unit === "celsius") {
		return value;
	} else if (unit === "fahrenheit") {
		return (value - 32) * (5 / 9);
	} else if (unit === "kelvin") {
		return value - 273.15;
	}
}

function updateFromCelsius(celsius) {
	fahrenheitField.value = parseFloat(((celsius * 9) / 5 + 32).toFixed(1));
	kelvinField.value = parseFloat((celsius + 273.15).toFixed(1));
}

/* Version 1: Dedicated function for each convertion
function celsiusToFahrenheit(inputValue) {
	return Math.round(inputValue * (9 / 5) + 32);
}
function celsiusToKelvin(inputValue) {
	return Math.round(inputValue + 273.15);
}

function fahrenheitToCelsius(inputValue) {
	return Math.round((inputValue - 32) * (5 / 9));
}
function fahrenheitToKelvin(inputValue) {
	return Math.round((inputValue - 32) * (5 / 9) + 273.15);
}

function kelvinToCelsius(inputValue) {
	return Math.round(inputValue - 273.15);
}
function kelvinToFahrenheit(inputValue) {
	return Math.round((inputValue - 273.15) * (9 / 5) + 32);
}
*/

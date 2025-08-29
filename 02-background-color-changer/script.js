let lastColor = null;

document.getElementById("colorChangeBtn").addEventListener("click", () => {
	const background = document.getElementById("background");
	const bgColorText = document.getElementById("bgColorText");

	// Version 1: Preselected Color Array
	/*
	const colors = [
		"blue",
		"red",
		"green",
		"yellow",
		"orange",
		"violet",
		"brown",
		"white",
		"black",
	];

	let selectedColor = colors[Math.floor(Math.random() * colors.length)];
    */

	let selectedColor;

	do {
		selectedColor = getRandomColor();
	} while (selectedColor === lastColor);

	lastColor = selectedColor;

	background.style.backgroundColor = selectedColor;
	bgColorText.textContent = background.style.backgroundColor;
});

function getRandomColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById("colorChangeBtn").addEventListener("click", () => {
	const background = document.getElementById("background");
	const bgColorText = document.getElementById("bgColorText");

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

	bgColorText.textContent = selectedColor;
	background.style.backgroundColor = selectedColor;
});

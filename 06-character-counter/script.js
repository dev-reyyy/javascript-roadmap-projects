const textField = document.getElementById("textField");
const charCounter = document.getElementById("charCounter");

textField.addEventListener("input", () => {
	charCounter.textContent = textField.value.length;
});

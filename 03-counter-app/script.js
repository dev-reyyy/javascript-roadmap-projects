const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const counterField = document.getElementById("counterField");

incrementBtn.addEventListener("click", () => {
	counterField.value = +counterField.value + 1;
});

decrementBtn.addEventListener("click", () => {
	if (+counterField.value > 0) {
		counterField.value = +counterField.value - 1;
	}
});

resetBtn.addEventListener("click", () => {
	counterField.value = 0;
});

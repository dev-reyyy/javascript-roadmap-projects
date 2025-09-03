const clock = document.getElementById("clock");
const timeFormatRadioBtns = document.getElementsByName("timeFormat");

let selectedFormat = "hour12";

const formatOptions = {
	hour12: { hour12: true },
	hour24: { hour12: false },
};

timeFormatRadioBtns.forEach((radio) => {
	radio.addEventListener("change", () => {
		selectedFormat = radio.value;
	});
});

setInterval(updateClock, 1000);

function updateClock() {
	let now = new Date();
	let timeString;

	timeString = now.toLocaleTimeString([], formatOptions[selectedFormat]);

	clock.textContent = timeString;
}

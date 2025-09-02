const inputText = document.getElementById("inputText");
const checkBtn = document.getElementById("checkBtn");
const resultMsg = document.getElementById("resultMsg");

checkBtn.addEventListener("click", () => {
	const normalizeString = getNormalizeString(inputText.value);

	if (normalizeString) {
		if (normalizeString === reverseString(normalizeString)) {
			resultMsg.style.color = "green";
			resultMsg.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg>
                <h4>Palindrome!</h4>
            `;
		} else {
			resultMsg.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                </svg>
                <h4>Not a Palindrome.</h4>
            `;
			resultMsg.style.color = "red";
		}
		resultMsg.style.display = "flex";
	} else {
		resultMsg.textContent = "";
		resultMsg.style.display = "none";
	}
});

function getNormalizeString(str) {
	// lowercase, no spaces, no punctuation
	return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function reverseString(str) {
	return str.split("").reverse().join("");
}

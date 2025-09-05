const rpsRadioBtns = document.getElementsByName("rpsBtn");
const startBtn = document.getElementById("startBtn");
const resultMsg = document.getElementById("resultMsg");

let playerChoice = null;

rpsRadioBtns.forEach((radio) => {
	radio.addEventListener("change", () => {
		playerChoice = radio.value;
		displayComputerChoice(null);
		resultMsg.style.display = "none";
	});
});

startBtn.addEventListener("click", () => {
	if (!playerChoice) {
		resultMsg.textContent = "Please choose Rock, Paper, or Scissors!";
		resultMsg.style.display = "block";
		return;
	}

	const computerChoice = getComputerChoice();
	displayComputerChoice(computerChoice);

	resultMsg.textContent = getResult(playerChoice, computerChoice);
	resultMsg.style.display = "block";
});

function getComputerChoice() {
	const options = ["rock", "paper", "scissors"];
	return options[Math.floor(Math.random() * options.length)];
}

function displayComputerChoice(choice) {
	document.getElementById("computerRock").checked = choice === "rock";
	document.getElementById("computerPaper").checked = choice === "paper";
	document.getElementById("computerScissors").checked = choice === "scissors";
}

function getResult(player, computer) {
	if (player === computer) return "It's a Draw!";

	const winsAgainst = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};

	return winsAgainst[player] === computer ? "You Win!" : "You Lose!";
}

const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const totalTip = document.getElementById("totalTip");
const totalAmount = document.getElementById("totalAmount");

[bill, tip].forEach((input) => input.addEventListener("input", updateTotal));

function updateTotal() {
	const billValue = parseFloat(bill.value) || 0;
	const tipValue = parseFloat(tip.value) || 0;
	const tipAmount = billValue * (tipValue / 100);

	totalTip.value = tipAmount.toFixed(2);
	totalAmount.value = (billValue + tipAmount).toFixed(2);
}

function calculateSum() {
  const input = prompt("Enter a positive integer:");

  if (input === null) return;

  const n = parseInt(input);

  if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
    alert("Please enter a valid positive integer greater than 0.");
    return;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  document.getElementById("numberDisplay").innerText = `Entered Integer: ${n}`;
  document.getElementById("sumResult").innerHTML = `<strong>Sum of natural numbers (1 to ${n}):</strong> ${sum}`;

  document.getElementById("result").style.display = "block";
}
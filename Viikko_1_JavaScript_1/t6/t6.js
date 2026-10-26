function generateTable() {
  const input = prompt("Enter a positive integer:");

  if (input === null) return;

  const n = parseInt(input);

  if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
    alert("Please enter a valid positive integer greater than 0.");
    return;
  }

  let tableHTML = "<table>";

  for (let i = 1; i <= n; i++) {
    tableHTML += "<tr>";
    
    for (let j = 1; j <= n; j++) {
      const product = i * j;
      tableHTML += `<td>${product}</td>`;
    }
    
    tableHTML += "</tr>";
  }
  
  tableHTML += "</table>";

  document.getElementById("tableTitle").innerText = `Multiplication Table (${n} × ${n}):`;
  document.getElementById("tableContainer").innerHTML = tableHTML;

  document.getElementById("result").style.display = "block";
}
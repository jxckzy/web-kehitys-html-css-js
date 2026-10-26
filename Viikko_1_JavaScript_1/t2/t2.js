function calculateDistance() {
  const point1Input = prompt("Enter Point 1 coordinates as 'x, y' (e.g., 3, 4):");
  if (!point1Input) return;

  const point2Input = prompt("Enter Point 2 coordinates as 'x, y' (e.g., 7, 1):");
  if (!point2Input) return;

  const p1Parts = point1Input.split(",");
  const p2Parts = point2Input.split(",");

  if (p1Parts.length !== 2 || p2Parts.length !== 2) {
    alert("Invalid input format. Please use 'x, y' format.");
    return;
  }

  const x1 = parseFloat(p1Parts[0]);
  const y1 = parseFloat(p1Parts[1]);
  const x2 = parseFloat(p2Parts[0]);
  const y2 = parseFloat(p2Parts[1]);

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    alert("Please enter valid numerical values.");
    return;
  }

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById("pointsDisplay").innerText = 
    `Point 1: (${x1}, ${y1}) | Point 2: (${x2}, ${y2})`;
    
  document.getElementById("distanceResult").innerHTML = 
    `<strong>Distance:</strong> ${distance.toFixed(2)} units`;

  document.getElementById("result").style.display = "block";
}
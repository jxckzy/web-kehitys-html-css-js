function classifyTriangle() {
  const s1 = prompt("Enter the length of side 1:");
  if (s1 === null) return;
  const s2 = prompt("Enter the length of side 2:");
  if (s2 === null) return;
  const s3 = prompt("Enter the length of side 3:");
  if (s3 === null) return;

  const a = parseFloat(s1);
  const b = parseFloat(s2);
  const c = parseFloat(s3);

  if (isNaN(a) || isNaN(b) || isNaN(c) || !(a > 0 && b > 0 && c > 0)) {
    alert("Please enter valid positive numbers for all sides.");
    return;
  }

  if (!(a + b > c && a + c > b && b + c > a)) {
    alert("The given side lengths cannot form a valid triangle.");
    return;
  }

  let triangleType = "";

  if (a === b && b === c) {
    triangleType = "Equilateral Triangle (All sides are equal)";
  } else if (!(a === b || b === c || a === c)) {
    triangleType = "Scalene Triangle (No sides are equal)";
  } else {
    triangleType = "Isosceles Triangle (Two sides are equal)";
  }

  document.getElementById("sidesDisplay").innerText = 
    `Sides: a = ${a}, b = ${b}, c = ${c}`;
    
  document.getElementById("typeResult").innerHTML = 
    `<strong>Type:</strong> ${triangleType}`;

  document.getElementById("result").style.display = "block";
}
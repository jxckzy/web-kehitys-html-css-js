const numbers = [];

while (true) {
    let input = prompt("Enter a number (or 'done' to finish):");
    
    if (input === null || input.trim().toLowerCase() === 'done') {
        break;
    }

    let trimmedInput = input.trim();
    
    if (trimmedInput !== "" && !isNaN(trimmedInput)) {
        numbers.push(Number(trimmedInput));
    } else {
        alert("Invalid input. Please enter a valid number or type 'done'.");
    }
}

const evenNumbers = [];

for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

const outputDiv = document.getElementById("output");
if (evenNumbers.length > 0) {
    outputDiv.innerHTML = `<p><strong>Even Numbers:</strong> ${evenNumbers.join(", ")}</p>`;
} else {
    outputDiv.innerHTML = `<p><strong>Even Numbers:</strong> None</p>`;
}

const endMessage = document.getElementById("end-message");
endMessage.textContent = "Program execution completed.";
const numbers = [];

for (let i = 1; i <= 5; i++) {
    let input = prompt(`Enter Number ${i}:`);
    let num = Number(input);
    numbers.push(num);
}

console.log("Numbers:", numbers);

let searchInput = prompt("Enter a Number to Search:");
let searchNum = Number(searchInput);

if (numbers.includes(searchNum)) {
    console.log(`Number ${searchNum} is found in the array.`);
} else {
    console.log(`Number ${searchNum} is not found in the array.`);
}

numbers.pop();
console.log("Updated Numbers:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);
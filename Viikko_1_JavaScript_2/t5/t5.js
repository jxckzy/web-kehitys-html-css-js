function sortArray(numbers, order) {
    const sortedNumbers = [...numbers];

    if (order === "asc") {
        sortedNumbers.sort((a, b) => a - b);
    } 
    else if (order === "desc") {
        sortedNumbers.sort((a, b) => b - a);
    }

    return sortedNumbers;
}

const numbers = [5, 2, 8, 1, 9];
console.log("Original Array:", numbers);
console.log("Ascending Order:", sortArray(numbers, "asc"));
console.log("Descending Order:", sortArray(numbers, "desc"));

const scores = [42, 15, 88, 3, 27];
console.log("\nOriginal Scores:", scores);
console.log("Scores Ascending:", sortArray(scores, "asc"));
console.log("Scores Descending:", sortArray(scores, "desc"));
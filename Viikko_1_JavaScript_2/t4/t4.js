function sortArray(arr) {
    return [...arr].sort((a, b) => a - b);
}

const originalArray = [42, 7, 19, 3, 25, 12];
const sortedArray = sortArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Sorted Array:", sortedArray);
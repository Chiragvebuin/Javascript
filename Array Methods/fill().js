// 1. filling an arrray with another element in the choosen place
const numbers = [1,2,3,4,5]
numbers.fill(0,1,4);
console.log("1. filling an arrray with another element in the choosen place.");
console.log(numbers);



// 2. Printing Numbers from 1 to N.
function fillInNumbers(n) {
    return Array(n)
    .fill(0)
    .map((_, idx) => idx+1);
}
console.log("\n2. Printing Numbers from 1 to N.");
console.log(fillInNumbers(15));
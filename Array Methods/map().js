const numbers = [1,2,3,4,5];

const numbersDouble = numbers.map((currentValue, index) => {
    return currentValue * index;
});

console.log(numbersDouble);
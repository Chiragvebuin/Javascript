// const numbers = [1,2,3,4,5,6,7];

// const total = numbers.reduce((accumulator, value) => {
//     return accumulator * value;
// },1);

// console.log(total);

const arr = [1,2,3,4,5,2,1,5,1];

const count = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const repeatingElements = Object.keys(count).filter(key => count[key] > 1);

console.log(repeatingElements);

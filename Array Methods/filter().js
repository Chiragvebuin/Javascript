//1.print odd & even numbers from an Array
const numbers = [1,2,3,4,5];

const even = numbers.filter(value=> {
    return value%2==0;
});
const odd = numbers.filter(value=> {
    return value%2==1;
});
console.log("1.print odd & even numbers from an Array");
console.log(even);
console.log(odd);



// 2.print only 1 element 1 time no repeating in Array
const numbers1 = [1,2,3,2,1,3,3,5,4,6];
const num = numbers1.filter((value,index,arr) => {
    return arr.indexOf(value) == index;
});
console.log("\n2.print only 1 element 1 time no repeating in Array");
console.log(num);
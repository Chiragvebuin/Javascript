//JavaScript Fundamentals – Part 1

//Coding Challenge #1 & #2
const prompt = require("prompt-sync")();
var markweight = prompt("Mark Weight: ");
let markheight = prompt("Mark Height: ");
let johnweight = prompt("John Weight: ");
let johnheight = prompt("John Height: ");
let BMImark = markweight/markheight**2;
console.log(BMImark)
let BMIjohn = johnweight/(johnheight*johnheight);
console.log(BMIjohn)
const markHigherBMI = BMImark>BMIjohn? `Mark\'s BMI (${BMImark}) is Higher than John\'s (${BMIjohn})!`: `John\'s BMI (${BMIjohn}) is Higher than mark\'s (${BMImark})!`;
console.log(markHigherBMI)
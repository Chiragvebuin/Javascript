//Coding Challenges #4
const bill = Number(readLine("Enter the Bill Value"));
const tip = bill>= 50 && bill<= 300? 0.15*bill : 0.2*bill
const total = bill+tip;
console.log(`\"The bill was ${bill}, the tip was ${tip}, and the total value ${total}\"`)

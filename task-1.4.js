//Coding Challenges #4
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
const aler = [];


(async () => {
    console.log("=============");
    for (let index = 0; index < 3; index++) {  
        const answer = await rl.question('What is your favorite food? ', index);
        aler.push(answer)    
     }
     
    rl.close()
    console.log(aler);
})()

// rl.question('Enter the Bill Value: ', (bill) => {
//   const tip = bill>= 50 && bill<= 300? 0.15*bill : 0.2*bill
//   const total = Number(bill)+tip;
//   console.log(`\"The bill was ${bill}, the tip was ${tip}, and the total value ${total}\"`)
//   rl.close();
// });


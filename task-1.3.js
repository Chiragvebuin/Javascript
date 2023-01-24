const prompt = require("prompt-sync")();
const calcAverage = (a,b,c) => {
    return (a+b+c)/3
}
const do1 = Number(prompt("Dolhins Match 1 Score: "));
const do2 = Number(prompt("Dolhins Match 2 Score: "));
const do3 = Number(prompt("Dolhins Match 3 Score: "));
const avgDolhins = (calcAverage(do1,do2,do3))
console.log(`${do1},${do2},${do3} = ${avgDolhins}`)
const ko1 = Number(prompt("Koalas Match 1 Score: "));
const ko2 = Number(prompt("Koalas Match 2 Score: "));
const ko3 = Number(prompt("Koalas Match 3 Score: "));
const avgKoalas = (calcAverage(ko1,ko2,ko3))
console.log(`${ko1},${ko2},${ko3} = ${avgKoalas}`)
const checkWinner = avgDolhins>avgKoalas? `Dolphins win (${avgDolhins} vs. ${avgKoalas})`: `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
console.log(checkWinner)

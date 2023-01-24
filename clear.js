const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No one wins!`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

const calcAverage1 = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const scoreDolphins1 = calcAverage1(85, 54, 41);
const scoreKoalas1 = calcAverage1(23, 34, 27);

function checkWinner1(avgDolhins1, avgKoalas1) {
  if (avgDolhins1 >= avgKoalas1 * 2) {
    console.log(`Dolphins wins (${avgdolphins1} vs ${avgKoalas1}).`);
  } else if (avgKoalas1 >= avgDolhins1 * 2) {
    console.log(`Koalas win (${avgKoalas1} vs ${avgDolhins1}).`);
  } else {
    console.log(`No one wins!`);
  }
}

checkWinner(scoreDolphins1, scoreKoalas1);

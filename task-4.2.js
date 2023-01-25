let game = {
    homeTeam: "Bayern Munich",
    awayTeam: "Borrussia Dortmund",
    odds: [1.33, 3.25, 6.5],
    scored: ["Gnarby", "Hummels", "Lewandowski", "Lewandowski"]
  };
  
console.log("Scored Goals: ");
  for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
  }
  
  let sum = 0;
  for (let i = 0; i < game.odds.length; i++) {
    sum += game.odds[i];
  }
  let averageOdd = sum / game.odds.length;
  console.log(`\nAverage odd: ${averageOdd}`);
  
  console.log("\nOdds: ");
  console.log(`Odd of victory ${game.homeTeam}: ${game.odds[0]}`);
  console.log(`Odd of draw: ${game.odds[1]}`);
  console.log(`Odd of victory ${game.awayTeam}: ${game.odds[2]}`);
  
  let scorers = {};
  for (let i = 0; i < game.scored.length; i++) {
    if (scorers[game.scored[i]] === undefined) {
      scorers[game.scored[i]] = 1;
    } else {
      scorers[game.scored[i]]++;
    }
  }
  console.log("\nScorers: ",scorers);
  
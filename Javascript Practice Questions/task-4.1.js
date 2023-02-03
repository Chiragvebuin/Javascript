const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    printGoals : function(arr){
      
    }
    };
    
    const {players} = game;

    const [players1 ,players2] = players;
    console.log(players1);
    console.log(players2);
     
   const [gK1 ,...fP1] = players1;
   const [gK2 ,...fP2] = players2;
   console.log(gK1 , fP1);
   console.log(gK2 , fP2);
   const allPlayers = [...players1,...players2];
   console.log(allPlayers);
   
   const players1Final= [...players1,'Thiago', 'Coutinho' , 'Perisic'];
   console.log(players1Final);
   
   console.log(game.odds);
   const {team1 , x:draw , team2} = game.odds;
   console.log(team1,draw,team2);

   team1 < team2 && console.log('Team 1 is more likely to win')
   team2 < team2 && console.log('Team 2 is more likely to win')
   
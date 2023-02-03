const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
app.listen(3001, () => {
  console.log("Calculator app listening on port 3001");
});
rl.question('What do you think of Node.js? ', (ch) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${ch}`);

  rl.close();
});
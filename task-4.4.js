const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter the list of variable names in underscore_case, separate by new line ");

rl.on('line', (line) => {
    var lines = line.split("\n");
    for (let i = 0; i < lines.length; i++) {
        var words = lines[i].split("_");
        var camelCase = words.map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
        var tick = "✅";
        var tack = tick.repeat(lines[i].split("_").length);
        console.log(camelCase + " ".repeat(20 - camelCase.length) + tack);
    }
});

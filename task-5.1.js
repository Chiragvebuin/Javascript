const poll = {
    answers: [5, 2, 3],
    registerNewAnswer: function() {
        let input = prompt("What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)");
        if (!isNaN(input)) {
            input = parseInt(input);
            if (input >= 0 && input <= 3) {
                this.answers[input]++;
            } else {
                console.log("Invalid option number. Please enter a number between 0 and 3.");
            }
        } else {
            console.log("Invalid input. Please enter a number.");
        }
        this.displayResults();
    },
    displayResults: function(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    }
};

// test data
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({answers:testData1},'string');
poll.displayResults.apply({answers:testData2});


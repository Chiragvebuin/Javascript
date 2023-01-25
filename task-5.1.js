//1
let poll = {
    question: "What is your favourite programming language?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    registerNewAnswer: function() {
        let selectedOption = prompt(`${this.question}
        0: ${this.options[0]}
        1: ${this.options[1]}
        2: ${this.options[2]}
        3: ${this.options[3]}
        Please enter the number of your selected option:`);
    }
};

poll.registerNewAnswer();

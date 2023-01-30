function calcAverageHumanAge(ages) {
    // Step 1: Calculate the dog age in human years
    var humanAges = ages.map(function(dogAge) {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });
    // Step 2: Exclude all dogs that are less than 18 human years old
    var adultHumanAges = humanAges.filter(function(humanAge) {
        return humanAge >= 18;
    });
    // Step 3: Calculate the average human age of all adult dogs
    var sum = adultHumanAges.reduce(function(total, age) {
        return total + age;
    }, 0);
    var average = sum / adultHumanAges.length;
    return average;
}

// Test data 1: [5, 2, 4, 1, 15, 8, 3]
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Test data 2: [16, 6, 10, 5, 6, 1, 4]
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

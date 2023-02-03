const calcAverageHumanAge = (ages) => {
    const adultAges = ages
    .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
    .filter(humanAge => humanAge >= 18);
    if(adultAges.length > 0) {
        return adultAges.reduce((sum, age) => sum + age, 0) / adultAges.length;
    }else{
        return 'No adult dogs';
    }
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

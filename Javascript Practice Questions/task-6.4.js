const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(dog => {
    dog.recommendedFood = Math.pow(dog.weight, 0.75) * 28;
});

//2.
let sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
let curFood = sarahsDog.curFood;
let recommendedFood = sarahsDog.recommendedFood;
if(curFood > recommendedFood) {
    console.log(`Sarah's dog is eating too much`);
} else {
    console.log(`Sarah's dog is eating too little`);
}

//3.
let ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
let ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).map(dog => dog.owners).flat();

//4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//5.
let isAnyDogEatExactly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Is any dog eating exactly the recommended amount? ${isAnyDogEatExactly}`);

//6.
let isAnyDogEatOkay = dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1));
console.log(`Is any dog eating an okay amount? ${isAnyDogEatOkay}`);

//7.
let dogsEatOkay = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1));

//8.
let sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);

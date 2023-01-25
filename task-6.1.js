function checkDogs(dogsJulia, dogsKate) {
    // 1. Create a shallow copy of Julia's array and remove the cat ages
    let correctedDogsJulia = dogsJulia.slice();
    correctedDogsJulia.splice(0,1);
    correctedDogsJulia.splice(-2);
    
    // 2. Create an array with both Julia's (corrected) and Kate's data
    let allDogs = correctedDogsJulia.concat(dogsKate);
    
    // 3. Log to the console whether each dog is an adult or a puppy
    for (let i = 0; i < allDogs.length; i++) {
      if (allDogs[i] >= 3) {
        console.log(`Dog number ${i+1} is an adult, and is ${allDogs[i]} years old`);
      } else {
        console.log(`Dog number ${i+1} is still a puppy `);
      }
    }
  }
  
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  
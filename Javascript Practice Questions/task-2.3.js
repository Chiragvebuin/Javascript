const mark = {
    firstName: "Mark",
    lastName: "Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  const john = {
    firstName: "John",
    lastName: "Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  console.log(mark.calcBMI());
  console.log(john.calcBMI());
  
  if (mark.bmi > john.bmi) {
    console.log(
      `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`
    );
  } else if (john.bmi > mark.bmi) {
    console.log(
      `${mark.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${john.bmi})`
    );
  }
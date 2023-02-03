function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log("New speed: " + this.speed + "km/h");
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log("New speed: " + this.speed + "km/h");
}

let car1 = new Car("BMW", 120);
let car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake(); 

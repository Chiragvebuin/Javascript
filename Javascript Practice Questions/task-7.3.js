function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
}

function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make}'s battery is now charged to ${this.charge}%`);
}

EV.prototype.accelerate = function() {
    if (this.charge > 0) {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is now going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    } else {
        console.log(`${this.make}'s battery is too low to accelerate`);
    }
}

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate(); // Tesla is now going at 140 km/h, with a charge of 22%
tesla.chargeBattery(90); // Tesla's battery is now charged to 90%
tesla.accelerate(); // Tesla is now going at 160 km/h, with a charge of 19%
tesla.brake(); // Tesla is now going at 155 km/h

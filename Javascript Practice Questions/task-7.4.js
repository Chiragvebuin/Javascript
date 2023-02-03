class CarCl {
    constructor(make, speed) {
        this.make = make;
        this._speed = speed;
    }

    get speed() {
        return this._speed;
    }

    set speed(newSpeed) {
        this._speed = newSpeed;
    }

    get speedUS() {
        return this._speed / 1.6;
    }

    set speedUS(newSpeed) {
        this._speed = newSpeed * 1.6;
    }

    accelerate() {
        this._speed += 10;
        console.log(`${this.make} is now going at ${this._speed} km/h`);
        return this;
    }

    brake() {
        this._speed -= 5;
        console.log(`${this.make} is now going at ${this._speed} km/h`);
        return this;
    }
}

class EVCl extends CarCl {
    constructor(make, speed, charge) {
        super(make, speed);
        this._charge = charge;
    }

    get charge() {
        return this._charge;
    }

    set charge(newCharge) {
        this._charge = newCharge;
    }

    chargeBattery(chargeTo) {
        this._charge = chargeTo;
        console.log(`${this.make}'s battery is now at ${this._charge}%`);
        return this;
    }

    accelerate() {
        this._speed += 20;
        this._charge -= 1;
        console.log(`${this.make} is now going at ${this._speed} km/h, with a charge of ${this._charge}%`);
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(90).accelerate().brake();

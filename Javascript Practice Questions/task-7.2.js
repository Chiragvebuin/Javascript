class CarCl {
    constructor(make, speed) {
        this.make = make;
        this._speed = speed;
    }

    accelerate() {
        this._speed += 10;
        console.log("New speed: " + this._speed + "km/h");
    }

    brake() {
        this._speed -= 5;
        console.log("New speed: " + this._speed + "km/h");
    }

    get speedUS() {
        return this._speed / 1.6;
    }

    set speedUS(speed) {
        this._speed = speed * 1.6;
    }
}

let car1 = new CarCl("Ford", 120);

car1.accelerate(); // 130 km/h
car1.brake(); // 125 km/h
console.log(car1.speedUS); // 78.125 mi/h
car1.speedUS = 50;
console.log(car1.speed); // 80 km/h

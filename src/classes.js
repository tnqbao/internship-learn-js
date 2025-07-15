class Vehicle {
    id
    name
    type
    color
    constructor(id, name, type, color) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.color = color;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getColor() {
        return this.color;
    }
}

class Bus extends Vehicle {
    seats
    constructor(id, name, color, seats = 24) {
        super(id, name, 'Bus', color);
        this.seats = seats;
    }
    getSeats() {
        return this.seats;
    }
    setSeats(seats) {
        this.seats = seats;
    }
}

class Car extends Vehicle {
    doors
    constructor(id, name, color, doors = 4) {
        super(id, name, 'Car', color);
        this.doors = doors;
    }
    getDoors() {
        return this.doors;
    }
    setDoors(doors) {
        this.doors = doors;
    }
}

const vehicles_1 = new Bus("01", "Mai Link", "Green", 30)
const vehicles_2 = new Car("02", "BWM", "Red", 4);

console.log(vehicles_1)
console.log(vehicles_2)

vehicles_1.setSeats(32);
console.log(vehicles_1.getSeats());
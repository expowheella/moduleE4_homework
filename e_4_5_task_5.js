/** Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6. */

// Prototype class
class Appliance {
    static equipmentType = "Devices";

    constructor(options) {
        this.title = options.title
        this.power = options.power
    };

    plugIn() {
        this.pluggedIn = true
        this.power = this.power
    }

    unPlug() {
        this.pluggedIn = false
        this.power = 0
    }

    showPower() {
        return `the power is ${this.power} Watts`
    };

    // getter
    get powerInfo() {
        return this.power + "W"
    };

    // setter
    // set power: macbook.powerInfo = 100
    set powerInfo(newValue) {
        this.power = newValue;
    };
};




// Inheritance
class Laptop extends Appliance {
    static name = "Laptop"

    constructor(options) {
        super(options)
        this.screen = options.screen
        this.price = options.price
    };

    showPrice () {
        return `The cost of ${this.title} is ${this.price}$`
    }
};


class ElectricCar extends Appliance {
    static name = "Electromobile"

    constructor(instance) {
        super(instance)
        this.colour = instance.colour
    }

    showColour() {
        return `The colour of ${this.title} is ${this.colour}`
    }

}




// Instances
const macbook = new Laptop(
    {
        title: "MacBook Pro 14'",
        power: 75,
        screen: 17,
        price: 1700
    }
)


const tesla = new ElectricCar(
    {
        title: "Tesla Model S",
        power: 2e4,
        colour: "Deep Blue Metallic"
    }
)



// Summarize the power
devices = [macbook, tesla]


const sumPower = function () {
    let item = 0
    for (let i = 0; i < devices.length; i++) {
            item += devices[i].power;
            console.log(`${devices[i].title}, power: ${devices[i].power} W`)
    }
    console.log(`Total power: ${item} W`);
}

console.log("CASE #1")
macbook.plugIn()
tesla.plugIn()
sumPower();

console.log("CASE #2")
macbook.plugIn()
tesla.unPlug()
sumPower();

console.log("CASE #3")
macbook.unPlug()
tesla.plugIn()
sumPower();

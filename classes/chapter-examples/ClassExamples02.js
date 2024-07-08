// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
  constructor(name, age, mass = 45) {
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

let tortoise = new Astronaut("Speedy", 120, 50);

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
class Car {
  constructor(make, model, year, color, mpg) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
  }
}
let myCar = new Car("Tesla", "Model S", 2019);
console.log(myCar);

let fox = {
  name: "Fox",
  age: 7,
  mass: 12,
  catchPhrase: function (repeats) {
    let phrase = "LaunchCode";
    for (let i = 0; i < repeats; i++) {
      phrase += " Rocks";
    }
    return phrase;
  },
};

console.log(
  `${fox.name} is ${fox.age} years old and has a mass of ${fox.mass} kg.`
);
console.log(`${fox.name} says, "${fox.catchPhrase(3)}."`);

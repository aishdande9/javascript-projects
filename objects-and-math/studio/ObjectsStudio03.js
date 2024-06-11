// Code your crewMass function here:

// Code your fuelRequired function here:

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "bear",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "cat",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateB, candidateD, candidateF];
let totalMassOfTheCrew = 0;
function crewMass(crew) {
  for (let i in crew) {
    totalMassOfTheCrew = totalMassOfTheCrew + crew[i].mass;
  }

  return Math.round(totalMassOfTheCrew * 10) / 10;
}
console.log("Total Mass :" + crewMass(crew));


let massOfTheRocket = 75000;
let amountOfFuelNeeded=0;
function fuelRequired(crew)
 {
  let mass = crewMass(crew);
  let rocketMass = 75000;
  let totalMass = mass+rocketMass;
  let baseFuel = totalMass * 9.5;
  let extraFuel = 0;
  
  for(let i in crew){
    if(crew[i].species === "cat"||crew[i].species === "dog"){
      console.log("dog")
      extraFuel = extraFuel+200;
    }else{
      console.log("species")
      extraFuel = extraFuel+100;
     
    }
  }
  let totalFuel = Math.ceil(baseFuel+extraFuel)
  console.log(`The mission has a launch mass of ${mass} kg and requires ${totalFuel}kg of fuel.`);
  return totalFuel;
}
fuelRequired(crew);
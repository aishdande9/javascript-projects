let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)
}};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)
}};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)

}};
let bigBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)

}};

let coolTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 	0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)

}};

function species(objectName){
 objectName["astronautID"] = Math.ceil(Math.random()*11);
   return objectName;
}

console.log(species(superChimpOne));
console.log(species(salamander));
console.log(species(superChimpTwo));
console.log(species(bigBeagle));
console.log(species(coolTardigrade));




function crewReports(objectName){
  return `${objectName.name} is a ${objectName.species}. They are ${objectName.age} years old and ${objectName.mass} kilograms. Their ID is ${objectName.astronautID}.`
  
}
console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(bigBeagle));
console.log(crewReports(coolTardigrade));


let crew = [];
crew.push(superChimpOne,salamander,superChimpTwo,bigBeagle,coolTardigrade);
console.log(crew);


function fitness(crew){
   let newCrew=[];
   let turns;
   let numSteps;
  
for(let i in crew){
   numSteps = 0;
   turns=0;
  while(numSteps<20){
    
      numSteps += crew[i].move();
      turns++;
   }
   newCrew.push (`${crew[i].name} took ${turns} turns to take 20 steps.`);
}
   return newCrew;
   }



console.log(fitness(crew));



// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

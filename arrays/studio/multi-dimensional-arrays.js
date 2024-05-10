let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinet1 = food.split(",")
console.log(cabinet1);
let cabinet2 = equipment.split(",")
console.log(cabinet2)

let cabinet3 = pets.split(",")
console.log(cabinet3)

let cabinet4 = sleepAids.split(",")
console.log(cabinet4)


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(cabinet1);
cargoHold.push(cabinet2);
cargoHold.push(cabinet3);
cargoHold.push(cabinet4);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require("readline-sync");

userInput = input.question("Select a cabinet between (0-3)in the cargoHold :  ");
console.log(`User selected cabinet: ${userInput}`);



//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if(userInput>cargoHold.length){
    console.log("Error!!!! you entered an invalid number")
}
else {
    console.log(cargoHold[userInput]);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cargoNo = input.question("Select a cabinet between (0-3)in the cargoHold :  ");
console.log(`User selected cabinet: ${cargoNo}`);
item = input.question("please enter the item : ");
console.log(`User selected item: ${item}`);

if(cargoHold[cargoNo].includes(item)){
    console.log(`Cabinet ${cargoNo} DOES contain ${item}.`);
}
else{
    console.log(`Cabinet ${cargoNo} DOES NOT contain ${item}.`);
}
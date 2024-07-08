// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

const nameOfTheSpaceShuttle = "Determination";
const shuttleSpeed = 17500;
const distanceToMars = 225000000;
const distanceToMoon = 384400;
const milesPerKm = 0.621;

console.log(typeof nameOfTheSpaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);

const milesToMars = distanceToMars*milesPerKm;
console.log(milesToMars);
const hoursToMars = milesToMars/shuttleSpeed;
console.log(hoursToMars);
const daysToMars = hoursToMars/24;
console.log(daysToMars);

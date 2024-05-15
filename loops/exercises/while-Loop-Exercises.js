//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.


let fuelLevelStart=0;
let noOfAstronauts=0;
let altitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require("readline-sync");
  fuelLevelStart = input.question("Enter the starting fuelLevel : ");
  fuelLevelStart = Number(fuelLevelStart);
  
  while(!(fuelLevelStart>5000&&fuelLevelStart<30000)){
      fuelLevelStart= input.question("invalid input!!!,please enter the positive integer level");
      fuelLevelStart = Number(fuelLevelStart);
  }
  console.log(`${fuelLevelStart} is a valid number`);
  

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
noOfAstronauts = input.question("please enter Astronauts :");
noOfAstronauts = Number(noOfAstronauts);

  while(!((noOfAstronauts > 0)&&(noOfAstronauts<8))){
    noOfAstronauts = input.question("Invalid input!!!! , please enter the valid number of Astronauts : ");

    noOfAstronauts = Number(noOfAstronauts);

  }

  console.log(`${noOfAstronauts} is the valid number !!!`);
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.


while ((fuelLevelStart)-(100*noOfAstronauts) > 0) {
  altitude += 50;
fuelLevelStart -= 100*noOfAstronauts;
  }
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km.`);
if(altitude >= 2000){
  console.log("add orbit achieved!!");
}
else{
  console.log("Failed to reach orbit");
}

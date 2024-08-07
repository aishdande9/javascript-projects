// Declare and initialize the variables for exercise 1 here:
const engineIndicatorLight = "red blinking";
const spaceSuitsOn = true;
const shuttleCabinReady = true;
const crewStatus = spaceSuitsOn && shuttleCabinReady;
const computerStatusCode = 200;
const shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if(crewStatus){
   console.log("crew ready");
}else{
   console.log("crew not ready");
}


if(computerStatusCode === 200)
{
   console.log("“Please stand by. Computer is rebooting.”");

}else if(computerStatusCode === 400){
   console.log("“Success! Computer online.”");
}
else{
   console.log("“ALERT: Computer offline!”");
}

if(shuttleSpeed>17500){
   console.log("ALERT: Escape velocity reached!");
}else if(shuttleSpeed<8000){
   console.log("ALERT: Cannot maintain orbit!");
}else{
   console.log("Stable speed");
}
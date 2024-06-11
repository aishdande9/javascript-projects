



// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];



// Code your orbitCircumference function here:
let radius = 2000;
function orbitCircumference(radius) {
    return Math.round(2*Math.PI*radius);
  
}
console.log("OrbitCircumference :"+orbitCircumference(radius));

// Code your missionDuration function here:
let orbitspeed = 28000;
let nocompletedOrbits=3;
function missionDuration(radius, orbitspeed, nocompletedOrbits)
 {
  let completeCircumference = orbitCircumference(radius);
let oneCompleteOrbit = completeCircumference/orbitspeed;

let completeOrbit = oneCompleteOrbit*nocompletedOrbits;
return Math.round(completeOrbit*100)/100;

}
console.log("No of orbits Completed :"+missionDuration(radius,orbitspeed,nocompletedOrbits)+" hrs")

// Copy/paste your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(idNumbers) {
  
  let crewArray = [];
     
  while(crewArray.length < 3){
      let result = Math.floor(Math.random()*(idNumbers.length));
      let id = idNumbers[result];
     
      if(!crewArray.includes(id)){
        crewArray.push(id);
        
      
      }
  }

  return crewArray;
}
console.log("Selected random Entries :"+selectRandomEntry(idNumbers));

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crewArray = [];

function buildCrewArray(animals, idNumbers) {
  const selectedIds = selectRandomEntry(idNumbers);
  console.log("selected Ids: " + selectedIds);
 
  for (let i in animals) {
    for (let j in selectedIds) {
      if (animals[i].astronautID === selectedIds[j]) {
        crewArray.push(animals[i]);
      }
    }
  }
  console.log(`${crewArray[0].name},${crewArray[1].name} and ${crewArray[2].name} are going to space`);
  return crewArray;
}


// Code your oxygenExpended function here:
buildCrewArray(animals, idNumbers);
let candidate = crewArray[Math.floor(Math.random()*crewArray.length)];
console.log("candidate total duration: "+ oxygenExpanded(candidate));
function oxygenExpanded(candidate)
  {
missionDuration(nocompletedOrbits,radius,orbitspeed);
//let totalDuration = spaceWalkTime*3;
let oxygenUsed = candidate.o2Used(2);
console.log("Oxygen Used:"+ Math.round(oxygenUsed*1000)/1000);
console.log("Oxygen Used:"+ oxygenUsed);
// let oxygenUsedForOnePerson = candidate-(oxygenUsed);
console.log(candidate.astronautID);
return ` ${candidate.name} will perform the spacewalk, which will last ${missionDuration(nocompletedOrbits,radius,orbitspeed)} hours and require ${oxygenUsed} kg of oxygen.`;
}

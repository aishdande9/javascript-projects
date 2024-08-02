// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
  const takeoff = document.getElementById("takeoff");
  const status = document.getElementById("flightStatus");
  const background = document.getElementById("shuttleBackground");
  const spaceheight = document.getElementById("spaceShuttleHeight");
  const land = document.getElementById("landing");
  const abort = document.getElementById("missionAbort");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const rocket = document.getElementById("rocket");
  takeoff.addEventListener("click", () => {
    window.prompt("Confirm that the shuttle is ready for takeoff.");
    status.innerHTML = "Shuttle in flight.";
    background.style.backgroundColor = "blue";
    spaceheight.innerHTML = parseInt(spaceheight.innerHTML) + 10000;
  });
  land.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "Shuttle has landed.";
    background.style.backgroundColor = "green";
    spaceheight.innerHTML = 0;
  });
  abort.addEventListener("click", () => {
    window.confirm("Confirm that you want to abort the mission.");
    status.innerHTML = "Mission aborted.";
    background.style.backgroundColor = "green";
    spaceheight.innerHTML = 0;
  });
  down.addEventListener("click", moveDown);
  left.addEventListener("click", moveLeft);
  right.addEventListener("click", moveRight);
  up.addEventListener("click", moveUp);

  rocket.style.position = "absolute";
  rocket.style.left = "0px";
  rocket.style.top = "0px";
  function moveUp() {
    rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
    spaceheight.innerHTML = parseInt(spaceheight.innerHTML) + 10000;
  }

  function moveLeft() {
    rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
  }
  function moveRight() {
    rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
  }

  function moveDown() {
    rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
    spaceheight.innerHTML = parseInt(spaceheight.innerHTML) - 10000;
  }
});

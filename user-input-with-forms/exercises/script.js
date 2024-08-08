//Code Your Solution Below
window.addEventListener("load", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let testname = document.querySelector("input[name = testname]");
    let testdate = document.querySelector("input[name = flightdate]");

    let windrating = document.querySelector("input[name=windRating]");
    let rocketboosters = document.querySelector("input[name=boosterCount]");
    let productiongrade = document.querySelector(
      "input[name=productionServers]"
    );
    if (
      testname.value === "" ||
      testdate.value === "" ||
      windrating.value === "" ||
      rocketboosters.value === "" ||
      productiongrade.value === ""
    ) {
      alert("All fields are required!");
      event.preventDefault();
    }
  });
});

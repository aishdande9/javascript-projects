// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  // Write your unit tests here
  test("has a organization name", () => {
    expect(launchcode.organization).toContain("nonprofit");
  });
  test("has a executiveDirector name", () => {
    expect(launchcode.executiveDirector).toContain("Jeff");
  });
  test("has a percentageCoolEmployees", () => {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  test("has a programs offered array of 3 strings", () => {
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("programs offered array values", () => {
    expect(launchcode.programsOffered).toContain("Web Development");
  });
  test("programs offered array values", () => {
    expect(launchcode.programsOffered).toContain("Data Analysis");
  });
  test("programs offered array values", () => {
    expect(launchcode.programsOffered).toContain("Liftoff");
  });
  it("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!", () => {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  
  it("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  it("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!", () => {
    expect(launchcode.launchOutput(10)).toBe("'Launch Rocks! (CRASH!!!!)'");
  });
  it("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'", () => {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });
  test("When passed a number that is ONLY divisible by 3, return 'Code!'", () => {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  });
  it("When passed a number that is ONLY divisible by 5, return 'Rocks!'", () => {
    expect(launchcode.launchOutput(25)).toBe("Rocks!");
  });
  it("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", () => {
    expect(launchcode.launchOutput(49)).not.toBe(
      "'Rutabagas! That doesn't work.'"
    );
  });
});

// });

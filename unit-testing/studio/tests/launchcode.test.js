// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here
  test("has a organization name",()=>{
    expect(launchcode.organization).toContain("nonprofit");
  });
    test("has a executiveDirector name",()=>{
    expect(launchcode.executiveDirector).toContain("Jeff");
  });
    test("has a percentageCoolEmployees",()=>{
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
    test("has a programs offered array of 3 strings",()=>{
    expect(launchcode.programsOffered.length).toBe(3);
  });
    test("programs offered array values",()=>{
    expect(launchcode.programsOffered).toContain("Web Development")
  });
    test("programs offered array values",()=>{
    expect(launchcode.programsOffered).toContain("Data Analysis");
  });
  test("programs offered array values",()=>{
    expect(launchcode.programsOffered).toContain("Liftoff")
  });
  test("When passed a number that is ONLY divisible by 2, return 'Launch!'",()=>{
    expect(launchcode.launchOutput(4)).toBe("Launch!")
  });
  test("When passed a number that is ONLY divisible by 3, return 'Code!'",()=>{
    expect(launchcode.launchOutput(9)).toBe("Code!")
  });
  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'",()=>{
    expect(launchcode.launchOutput(10)).toBe("Rocks!")
  });
});












 
// });
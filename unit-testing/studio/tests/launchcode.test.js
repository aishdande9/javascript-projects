// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here
  test("has a organization name",()=>{
    expect(launchcode.organization).tocontain("nonprofit");
  });

  test("has a executiveDirector name",()=>{
    expect(launchcode.executiveDirector).tocontain("Jeff");
  });
  test("has a percentageCoolEmployees",()=>{
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  test("has a programs offered array of 3 strings",()=>{
    expect(launchcode.programsOffered.length).tobe(3);
  });
  test("programs offered array values",()=>{
    expect(launchcode.programsOffered).tocontain("Web Development")
  });
  test("programs offered array values",()=>{
    expect(launchcode.programsOffered).tocontain("Data Analysis");
  });
  test("programs offered array values",()=>{
    expect(launchcode.programsOffered).tocontain("Liftoff")
  });






 
});
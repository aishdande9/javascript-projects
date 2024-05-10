let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];


//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let str = "up,to,code,fun";

	let str1  = str.split(",");

	let check = str1.reverse();
	let output = check.join(",");
	//TODO: 2. write the code required for this step
console.log(output);
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}
reverseCommas()

//3)
function semiDash() {
	let str1 = "up;to;code;fun"

    let str2 = str1.split(";");
    console.log(str2);

    let check = str2.sort();
    console.log(check);

    let output = check.join("-");
    console.log(output);

//TODO: write the code required for this step

  
	return output;
}
semiDash()

//4)
function reverseSpaces() {
	    let str = "to code up fun";
    let check = str.split(" ");
    console.log(check);

    let checks = check.sort();
    console.log(checks);

    let output = checks.join(" ");
    console.log(output);
  //TODO: write the code required for this step

	return output;
}
reverseSpaces()

//5)
function commaSpace() {
	let str = "up, to, code, fun";
	let check = str.split(", ");
	let output= check.join(",");
	//TODO: write the code required for this step
  console.log(output);
	return output;
}
commaSpace()

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

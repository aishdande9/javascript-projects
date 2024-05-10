const input = require('readline-sync');
let str = "LaunchCode";

// //1) Use string methods to remove the first three characters from the string and add them to the end.
// //Hint - define another variable to hold the new string or reassign the new string to str.

 let str1  = str.slice(3)+str.slice(0,3);




// //Use a template literal to print the original and modified string in a descriptive phrase.
 console.log(`orginal string :-${str}, new String: ${str1}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter number to modify the string :");
console.log("User entered :"+userInput);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(userInput>str.length){

    console.log("Error!!! user input has no  longer than the word");
    let str1  = str.slice(3)+str.slice(0,3);
    console.log("but default word moving to 3 characters  is: "+str1);

}else{

let word = str.slice(userInput)+str.slice(0,userInput);
console.log("here is the replaced word :"+ word);
}

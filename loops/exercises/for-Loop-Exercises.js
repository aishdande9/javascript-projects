/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

console.log("------------------- a .print numbers 0-20---------------------------");
for(let i=0;i<20;i++){
  console.log(i);
}
console.log("------------------- b .print odd values from 3-29---------------------------");
for(let i=3;i<30;i=i+2){
  console.log(i);
}
console.log("------------------- c.print Even values from 12 to-14 in descending order ---------------------------");

for(let i=12;i>=-14;i=i-2){
  console.log(i)
  
  }
  console.log("------------------- c.print numbers 50-20 in descending order n=multiples of 3---------------------------");

  for(let i=50;i>=20;i--){
    if(i%3===0){
        console.log(i)
    }

 
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42]. 



Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

  
  let strArray = [1, 5, "LC101", "blue", 4];
  console.log("--------------a. printing each element of the array to a newline--------------");
  for(let i = 0;i<strArray.length;i++){
    console.log(strArray[i]);
  }
  let str = "LaunchCode";

  console.log("--------------a. printing each character of the string in reverse order to a newline--------------");
  for(let i = str.length-1;i>=0;i--){
      console.log(str[i]);
  }

/*Exercise #3:Construct a for loop that sorts the array [] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let numArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evenArray = [];

  console.log("------------------------------evenArray------------------------------------------");
for(let i = 0;i< numArray.length;i++){
  if(numArray[i]%2 === 0){
    evenArray.push(numArray[i])
  }
}
console.log(evenArray);

let oddArray = [];
for(let i = 0;i<numArray.length;i++){
  if(!(numArray[i] % 2 === 0)){
    oddArray.push(numArray[i])
  }
}
console.log(oddArray);
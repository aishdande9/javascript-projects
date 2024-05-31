
let arr1 = [5, 10, 2, 42];

function min(arr1){
  let min = arr1[0];
for(let i =1;i<arr1.length;i++){
  if(min>arr1[i]){
      min = arr1[i];
  }
}
return min;
}
console.log("Minimum value :"+min(arr1));

function sortedArray(arr1){
  let newArray = [];
  let minValue = 0;
  let minIndex = 0;
  while(arr1.length > 0){
      minValue = min(arr1);
      newArray.push(minValue);
     
      minIndex = arr1.indexOf(min(arr1));
      arr1.splice(minIndex,1);
  }
  
  console.log("newArray :"+newArray);
  console.log("oldArray :"+arr1);
  return newArray;
 
}
sortedArray(arr1);


//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:


let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let result = Math.floor(Math.random()*arr.length);
  return result;
}

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray:randomFromArray
}
console.log(
  "------------------------------single line-------------------------"
);
function makeLine(size) {
  let sum = "";
  for (let i = 0; i < size; i++) {
    sum = sum + "#";
  }

  return sum;
}

console.log(makeLine(5));
console.log("------------------------------square-------------------------");

function makeSquare(size) {
  let square = " ";
  for (let i = 0; i < size; i++) {
    square += "\n" + makeLine(size);
  }
  return square;
}
console.log(makeSquare(5));

console.log("------------------------------Rectangle-------------------------");

function makeRectangle(width, height) {
  let Rectangle = "";
  for (let j = 0; j < height; j++) {
    Rectangle += makeLine(width) + "\n";
  }
  return Rectangle;
}

console.log(makeRectangle(5, 3));

console.log("------------------------------Traingles-------------------------");

function makeDownwardStairs(height) {
  let stairs = "";
  for (let i = 1; i <= height; i++) {
    stairs += makeLine(i) + "\n";
  }
  return stairs;
}
console.log(makeDownwardStairs(5));

console.log(
  "------------------------------make space line-------------------------"
);

function makeSpaceLine(numSpaces, numChars) {
  let space1 = makeLine(numChars).padStart(numChars + numSpaces, " ");
  let space2 = makeLine().padEnd(numSpaces, " ");

  return space1 + space2;
}
console.log(makeSpaceLine(3, 5));

console.log(
  "------------------------------makeIsoscelesTriangle-------------------------"
);

function makeIsoscelesTriangle(height) {
  let triangle = "";
  for (let i = 0; i < height; i++) {
    triangle += makeSpaceLine(height - i) + makeLine(2 * i + 1) + "\n";
  }

  return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

console.log(
  "------------------------------make Diamond------------------------"
);

function makeDiamond(height) {
  diamond = makeIsoscelesTriangle(height) + "\n";

  for (let i = height - 1; i >= 1; i--) {
    diamond += makeSpaceLine(height - i + 1) + makeLine(2 * i - 1) + "\n";
  }

  return diamond.slice(0, -1);
}
console.log(makeDiamond(5));

const fs = require("fs");

function parseInput() {
  return fs
    .readFileSync("./day1.txt", "utf-8")
    .split("\n")
    .filter((x) => x)
    .map((x) => Number(x));
}

function partOne() {
  const depths = parseInput();
  
  let count = 0;
  for (let i = 1; i <= depths.length; i++) {
    if (depths[i] > depths[i-1]) {
      count++;
    }
  }
  return count;
}

function partTwo() {
  const depths = parseInput();

  let count = 0;
  for (i = 3; i <= depths.length; i++) {
    const sumOne = depths[i - 1] + depths[i - 2] + depths[i - 3];
    const sumTwo = depths[i] + depths[i - 1] + depths[i - 2];
    console.log(sumTwo);
    if (sumTwo > sumOne) {
      count++;
    }    
  }
  return count;
}

console.log(partOne());
console.log(partTwo());

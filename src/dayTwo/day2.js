const fs = require('fs');

function parseInput() {
  return fs.readFileSync('./day2.txt', 'utf-8')
  .split('\n')
}

function partOne() {
  const nav = parseInput();
  const start = {
    horizontal: 0,
    depth: 0,
  }

  const totals = nav.reduce((acc, current) => {
    if (current) {
      const arr = current.split(' ');
      switch(arr[0]) {
        case 'forward':
          acc.horizontal += Number(arr[1]);
          break;
        case 'down':
          acc.depth += Number(arr[1]);
          break;
        case 'up':
          acc.depth -= Number(arr[1]);
          break;
      }
    }
    return acc;
  }, start);
  return totals.horizontal * totals.depth;
}

function partTwo() {
  const nav = parseInput();
  const start = {
    horizontal: 0,
    depth: 0,
    aim: 0,
  };

  const totals = nav.reduce((acc, current) => {
    if (current) {
      const arr = current.split(' ');
      switch(arr[0]) {
        case 'up':
          acc.aim -= Number(arr[1]);
          break;
        case 'down':
          acc.aim += Number(arr[1]);
          break;
        case 'forward':
          acc.horizontal += Number(arr[1]);
          if (acc.aim !== 0) {
            acc.depth += Number(arr[1]) * acc.aim;
          }
          break;
      }
    }
    return acc;
  }, start);
  console.log(totals);
  return totals.horizontal * totals.depth;
}

// console.log(partOne());
console.log(partTwo());
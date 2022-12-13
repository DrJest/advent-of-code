const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '6.txt')).toString().trim().replace(/\r/g, '');

const grid = [];
for (let i = 0; i < 1000; i++) {
  grid.push([]);
  for (let j = 0; j < 1000; j++) {
    grid[i].push(0);
  }
}

for (let line of input.split('\n')) {
  let [command, start, _, end] = line.replace('turn ', 'turn_').split(' ');
  [start, end] = [start.split(','), end.split(',')];
  for (let i = parseInt(start[0]); i <= parseInt(end[0]); i++) {
    for (let j = parseInt(start[1]); j <= parseInt(end[1]); j++) {
      if (command === 'turn_on') {
        grid[i][j] = 1;
      }
      else if (command === 'turn_off') {
        grid[i][j] = 0;
      }
      else {
        grid[i][j] = grid[i][j] === 1 ? 0 : 1;
      }
    }
  }
}

let total = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    total += grid[i][j];
  }
}

console.log(total);

for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    grid[i][j] = 0;
  }
}

for (let line of input.split('\n')) {
  let [command, start, _, end] = line.replace('turn ', 'turn_').split(' ');
  [start, end] = [start.split(','), end.split(',')];
  for (let i = parseInt(start[0]); i <= parseInt(end[0]); i++) {
    for (let j = parseInt(start[1]); j <= parseInt(end[1]); j++) {
      if (command === 'turn_on') {
        grid[i][j] += 1;
      }
      else if (command === 'turn_off') {
        grid[i][j] -= 1;
        if (grid[i][j] < 0) grid[i][j] = 0;
      }
      else {
        grid[i][j] += 2;
      }
    }
  }
}

total = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    total += grid[i][j];
  }
}

console.log(total);

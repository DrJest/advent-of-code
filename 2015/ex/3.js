const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '3.txt')).toString().trim().split('\n');

let cur = [0, 0];

let visited = new Set();

for (let c of input[0]) {
  if (c === '^') cur[1]++;
  else if (c === 'v') cur[1]--;
  else if (c === '>') cur[0]++;
  else if (c === '<') cur[0]--;
  visited.add(cur.join(','));
}

console.log(visited.size);

cur = [0, 0];
visited = new Set();
robot = [0, 0];

for (let i = 0; i < input[0].length; i++) {
  let c = input[0][i];
  if (i % 2 === 0) {
    if (c === '^') cur[1]++;
    else if (c === 'v') cur[1]--;
    else if (c === '>') cur[0]++;
    else if (c === '<') cur[0]--;
    visited.add(cur.join(','));
  } else {
    if (c === '^') robot[1]++;
    else if (c === 'v') robot[1]--;
    else if (c === '>') robot[0]++;
    else if (c === '<') robot[0]--;
    visited.add(robot.join(','));
  }
}

console.log(visited.size);
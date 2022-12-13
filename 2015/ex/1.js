const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '1.txt')).toString().trim();

let floor = 0;
for (let c of input) {
  if (c === '(') floor++;
  else if (c === ')') floor--;
}

console.log(floor);

floor = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') floor++;
  else if (input[i] === ')') floor--;
  if (floor === -1) {
    console.log(i + 1);
    break;
  }
} 
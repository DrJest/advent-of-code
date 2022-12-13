const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '5.txt')).toString().trim();

// advent of code 2015 day 5 part 1
let nice = 0;
for (let line of input.split('\n')) {
  let vowels = 0;
  let double = false;
  let bad = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === 'a' || line[i] === 'e' || line[i] === 'i' || line[i] === 'o' || line[i] === 'u') vowels++;
    if (line[i] === line[i + 1]) double = true;
    if (line[i] === 'a' && line[i + 1] === 'b') bad = true;
    if (line[i] === 'c' && line[i + 1] === 'd') bad = true;
    if (line[i] === 'p' && line[i + 1] === 'q') bad = true;
    if (line[i] === 'x' && line[i + 1] === 'y') bad = true;
  }
  if (vowels >= 3 && double && !bad) nice++;
}

console.log(nice);

// advent of code 2015 day 5 part 2
nice = 0;
for (let line of input.split('\n')) {
  let double = false;
  let repeat = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === line[i + 2]) repeat = true;
    if (line.slice(i + 2).includes(line.slice(i, i + 2))) double = true;
  }
  if (double && repeat) nice++;
}

console.log(nice);
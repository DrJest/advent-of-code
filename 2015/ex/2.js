const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '2.txt')).toString().trim().split('\n');

// advent of code 2015 day 2 part 1
let total = 0;
for (let line of input) {
  let [l, w, h] = line.split('x').map(Number);
  let lw = l * w;
  let wh = w * h;
  let hl = h * l;
  total += 2 * lw + 2 * wh + 2 * hl + Math.min(lw, wh, hl);
}
console.log(total);

// advent of code 2015 day 2 part 2
total = 0;
for (let line of input) {
  let [l, w, h] = line.split('x').map(Number);
  total += 2 * (l + w + h - Math.max(l, w, h)) + l * w * h;
}
console.log(total);
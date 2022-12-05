"use strict";

const fs = require('fs');
const input = fs.readFileSync('12.txt').toString().split('\r\n').map((x) => x.split(">")[1].split(", ").map(y => parseInt(y)));

let visited = []
function reach(i) {
  if (visited.includes(i))
    return 0
  visited.push(i)
  return input[i].reduce((a,b) => a + reach(b), 1)
}

let R = input.map((_, k) => reach(k))

console.log(R[0]);
console.log("b:", R.filter(x => x > 0).length);
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '7.txt')).toString().trim().replace(/\r/g, '');

const wires = {};

for (let line of input.split('\n')) {
  let [instr, wire] = line.split(' -> ');
  wires[wire] = instr;
}

console.log(wires);
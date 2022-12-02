const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '1.txt')).toString('utf-8').replace(/\r/g, '');
let elves = input.split("\n\n").map(elf => elf.split("\n").reduce((a, e) => a += parseInt(e), 0));
console.log("Part 1: ", Math.max(...elves));
console.log("Part 2:", elves.sort((a, b) => b - a).slice(0, 3).reduce((a, e) => a += parseInt(e), 0));
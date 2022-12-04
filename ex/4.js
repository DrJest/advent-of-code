const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '4.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split("\n")
    .map(e => e.split(",").map(p => p.split("-").map(Number)))
    .reduce((a, e) => ((e[0][0] <= e[1][0] && e[0][1] >= e[1][1]) || (e[1][0] <= e[0][0] && e[1][1] >= e[0][1])) ? a + 1 : a, 0)
);

console.log(
  "Part 1:",
  input
    .split("\n")
    .map(e => e.split(",").map(p => p.split("-").map(Number)))
    .reduce((a, e) => ((e[0][0] <= e[1][0] && e[0][1] >= e[1][1]) || (e[1][0] <= e[0][0] && e[1][1] >= e[0][1]) || (e[0][0] >= e[1][0] && e[0][0] <= e[1][1]) || (e[0][1] >= e[1][0] && e[0][1] <= e[1][1])) ? a + 1 : a, 0)
);
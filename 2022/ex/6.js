const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '6.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split('')
    .map((c, i, a) => a.slice(i, i + 4).length === Array.from(new Set(a.slice(i, i + 4))).length)
    .findIndex(a => !!a) + 4
)

console.log(
  "Part 2:",
  input
    .split('')
    .map((c, i, a) => a.slice(i, i + 14).length === Array.from(new Set(a.slice(i, i + 14))).length)
    .findIndex(a => !!a) + 14
)
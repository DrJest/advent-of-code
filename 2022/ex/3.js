const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '3.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split("\n")
    .map(e => [e.slice(0, e.length / 2), e.slice(e.length / 2)])
    .map(e => e[0].split("").filter(n => e[1].split("").indexOf(n) > -1))
    .map(e => Array.from(new Set(e)))
    .reduce((a, e) => a = [...a, ...e], [])
    .map(c => c === c.toUpperCase() ? c.charCodeAt(0) - 38 : c.charCodeAt(0) - 96)
    .reduce((a, e) => a += e, 0)
)

console.log(
  "Part 2:",
  input
    .split("\n")
    .reduce((a, e, i) => i % 3 === 0 ? [...a, [e]] : [...a.slice(0, -1), [...a.slice(-1)[0], e]], [])
    .map(e => e[0].split("").filter(n => e[1].split("").indexOf(n) > -1 && e[2].split("").indexOf(n) > -1))
    .map(e => Array.from(new Set(e)))
    .reduce((a, e) => a = [...a, ...e], [])
    .map(c => c === c.toUpperCase() ? c.charCodeAt(0) - 38 : c.charCodeAt(0) - 96)
    .reduce((a, e) => a += e, 0)
)
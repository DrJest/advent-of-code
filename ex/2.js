const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '2.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:", input.split("\n").map(
    e => e.split(' ').map(e => ({ 'A': 0, 'X': 0, 'B': 1, 'Y': 1, 'C': 2, 'Z': 2 })[e])
  ).reduce((a, e) => {
    return a += (e[1] + 1) + (((e[0] - e[1] + 3) % 3) == 2 ? 6 : 0) + (((e[0] - e[1] + 3) % 3) === 0 ? 3 : 0);
  }, 0)
);

console.log(
  "Part 2:", input.split("\n").map(e => e.split(' ')).map(e => [
    { 'A': 0, 'B': 1, 'C': 2 }[e[0]],
    e[1]
  ]).map(e => [
    e[0],
    (e[1] === 'X') ? (e[0] + 2) % 3 : ((e[1] === 'Y') ? e[0] : ((e[0] + 1) % 3))
  ]).reduce((a, e) => {
    return a += (e[1] + 1) + (((e[0] - e[1] + 3) % 3) == 2 ? 6 : 0) + (((e[0] - e[1] + 3) % 3) === 0 ? 3 : 0);
  }, 0)
);
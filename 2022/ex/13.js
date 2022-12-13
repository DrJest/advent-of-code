const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '13.txt')).toString('utf-8').replace(/\r/g, '');

function sort(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    let i = 0;
    while (i < a.length) {
      if (i >= b.length) {
        return 1;
      }
      let o = sort(a[i], b[i]);
      if (o !== 0) {
        return o;
      }
      i++;
    }
    return a.length - b.length;
  }
  if (typeof a === 'number') {
    return sort([a], b);
  }
  if (typeof b === 'number') {
    return sort(a, [b]);
  }
  return 0;
}

console.log(
  "Part 1:",
  input
    .split('\n\n')
    .map((e) => e.split('\n').map(t => JSON.parse(t)))
    .reduce((a, e, i) => JSON.stringify(e) !== JSON.stringify(e.slice().sort(sort)) ? a : a + i + 1, 0)
)

console.log(
  "Part 2:",
  input
    .replace(/\n\n/g, '\n')
    .split('\n')
    .slice()
    .map(e => JSON.parse(e))
    .concat([[[6]], [[2]]])
    .sort(sort)
    .reduce((a, e, i, arr) => a || (arr.findIndex(e => JSON.stringify(e) === JSON.stringify([[2]])) + 1) * (arr.findIndex(e => JSON.stringify(e) === JSON.stringify([[6]])) + 1), 0)
)
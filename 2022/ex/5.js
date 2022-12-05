const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '5.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split("\n\n")
    .map(
      (e, i) => i ?
        e.split("\n").map(l => l.matchAll(/move (\d+) from (\d+) to (\d+)/g).next().value.slice(1).map(Number)) :
        e.split("\n").map(l => l.match(/.{3}( )?/g).map(c => c.substring(0, 3))).map((v, i, a) => a.map(c => c[i]).reverse().map(c => c && c.trim()).filter(v => !!v)).filter(r => r.join(''))
    )
    .reduce((a, e, i, arr) => {
      return !i ? null : (
        arr[1].forEach(([n, f, t]) => {
          arr[0][t - 1].push(...arr[0][f - 1].splice(-n).reverse());
        }) || (a = arr[0])
      );
    }, null)
    .map(c => c.pop().replace(/[\[\]]/g, ''))
    .join('')
)

console.log(
  "Part 2:",
  input
    .split("\n\n")
    .map(
      (e, i) => i ?
        e.split("\n").map(l => l.matchAll(/move (\d+) from (\d+) to (\d+)/g).next().value.slice(1).map(Number)) :
        e.split("\n").map(l => l.match(/.{3}( )?/g).map(c => c.substring(0, 3))).map((v, i, a) => a.map(c => c[i]).reverse().map(c => c && c.trim()).filter(v => !!v)).filter(r => r.join(''))
    )
    .reduce((a, e, i, arr) => {
      return !i ? null : (
        arr[1].forEach(([n, f, t]) => {
          arr[0][t - 1].push(...arr[0][f - 1].splice(-n));
        }) || (a = arr[0])
      );
    }, null)
    .map(c => c.pop().replace(/[\[\]]/g, ''))
    .join('')
)
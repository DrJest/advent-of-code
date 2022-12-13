const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '10.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split('\n')
    .map(l => l.trim())
    .reduce((a, e) => e === 'noop' ? a.concat(e) : a.concat('noop', e), [])
    .map(e => e.split(' '))
    .reduce((a, e, i) => ({
      x: e.length === 1 ? a.x : a.x + Number(e[1]),
      s: (i + 21) % 40 === 0 ? a.s + a.x * (i + 1) : a.s
    }), { x: 1, s: 0 })
    .s
);

console.log("Part 2:");
console.log(
  input
    .split('\n')
    .map(l => l.trim())
    .reduce((a, e) => e === 'noop' ? a.concat(e) : a.concat('noop', e), [])
    .map(e => e.split(' '))
    .reduce((a, e, i) => ({
      x: e.length === 1 ? a.x : a.x + Number(e[1]),
      s: (i + 21) % 40 === 0 ? a.s + a.x * (i + 1) : a.s,
      p: Math.abs(a.x - (i % 40)) < 2 ? a.p.concat('#') : a.p.concat(' ')
    }), { x: 1, s: 0, p: [] })
    .p
    .reduce((a, e, i) => (i % 40 === 0) ? a.concat(e) : [...a.slice(0, -1), a[a.length - 1] + e], [])
    .join('\n')
);
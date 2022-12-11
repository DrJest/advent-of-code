const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '11.txt')).toString('utf-8').replace(/\r/g, '');

const monkeys = input
  .split("\n\n")
  .map(m => m.split("\n"))
  .map(m => ({
    id: Number(m[0].split(" ")[1].replace(":", "")),
    items: m[1].split(": ")[1].split(", ").map(Number),
    operation: m[2].split(": ")[1].replace('new', 'mew'),
    test: Number(m[3].split("divisible by ")[1]),
    throw: [m[4].split(": ")[1].split(" ").pop(), m[5].split(": ")[1].split(" ").pop()].map(Number),
    inspected: 0
  }));

console.log(
  "Part 1:",
  ((ms, rs) => {
    for (let r = 0; r < rs; r++) {
      ms.forEach(m => {
        m.items.forEach(i => {
          m.inspected++;
          const f = new Function("old", ('let ' + m.operation + '; return mew;'));
          const newI = Math.floor(f(i) / 3);
          ms[m.throw[newI % m.test ? 1 : 0]].items.push(newI);
        });
        m.items = [];
      });
    }
    return ms.sort((a, b) => b.inspected - a.inspected).slice(0, 2).reduce((a, e) => a * e.inspected, 1);
  })(JSON.parse(JSON.stringify(monkeys)), 20)
);

console.log(
  "Part 2:",
  ((ms, rs) => {
    const mcm = ms.reduce((a, e) => a * e.test, 1);
    for (let r = 0; r < rs; r++) {
      ms.forEach(m => {
        m.items.forEach(i => {
          m.inspected++;
          const f = new Function("old", ('let ' + m.operation + '; return mew;'));
          const newI = f(i) % mcm;
          ms[m.throw[newI % m.test ? 1 : 0]].items.push(newI);
        });
        m.items = [];
      });
    }
    return ms.sort((a, b) => b.inspected - a.inspected).slice(0, 2).reduce((a, e) => a * e.inspected, 1);
  })(JSON.parse(JSON.stringify(monkeys)), 10000)
);

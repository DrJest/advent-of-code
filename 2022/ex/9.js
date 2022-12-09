const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '9.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split('\n')
    .map(l => l.trim().split(' '))
    .reduce((a, e) => [...a, ...Array(Number(e[1])).fill(e[0])], [])
    .reduce((a, m) => {
      const { knots, uniques } = a;
      knots[0][0] += m === 'L' ? -1 : m === 'R' ? 1 : 0;
      knots[0][1] += m === 'D' ? -1 : m === 'U' ? 1 : 0;
      for (let i = 1; i < knots.length; i++) {
        const head = knots[i - 1], tail = knots[i];
        if (Math.abs(head[0] - tail[0]) > 1 || Math.abs(head[1] - tail[1]) > 1) {
          tail[0] += head[0] > tail[0] ? 1 : head[0] < tail[0] ? -1 : 0;
          tail[1] += head[1] > tail[1] ? 1 : head[1] < tail[1] ? -1 : 0;
        }
      }
      uniques.add(knots[knots.length - 1].join(','));
      return { knots, uniques };
    }, { knots: Array(2).fill().map(_ => [0, 0]), uniques: new Set() })
    .uniques.size
);

console.log(
  "Part 2:",
  input
    .split('\n')
    .map(l => l.trim().split(' '))
    .reduce((a, e) => [...a, ...Array(Number(e[1])).fill(e[0])], [])
    .reduce((a, m) => {
      const { knots, uniques } = a;
      knots[0][0] += m === 'L' ? -1 : m === 'R' ? 1 : 0;
      knots[0][1] += m === 'D' ? -1 : m === 'U' ? 1 : 0;
      for (let i = 1; i < knots.length; i++) {
        const head = knots[i - 1], tail = knots[i];
        if (Math.abs(head[0] - tail[0]) > 1 || Math.abs(head[1] - tail[1]) > 1) {
          tail[0] += head[0] > tail[0] ? 1 : head[0] < tail[0] ? -1 : 0;
          tail[1] += head[1] > tail[1] ? 1 : head[1] < tail[1] ? -1 : 0;
        }
      }
      uniques.add(knots[knots.length - 1].join(','));
      return { knots, uniques };
    }, { knots: Array(10).fill().map(_ => [0, 0]), uniques: new Set() })
    .uniques.size
);
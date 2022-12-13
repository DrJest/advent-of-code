const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '12.txt')).toString('utf-8').replace(/\r/g, '');

const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

console.log(
  "Part 1:",
  input
    .split('\n')
    .map(line => line.split(''))
    .reduce((a, e, i) => {
      a[0].map.push(e.map((char, j) => {
        let e;
        if (char === 'S') {
          e = 0;
          a[0].starts.push([i, j]);
        } else if (char === 'E') {
          e = 25;
          a[0].end = [i, j];
        } else {
          e = char.codePointAt(0) - 'a'.codePointAt(0);
        }
        return e;
      }));
      return a;
    }, [{ map: [], starts: [], end: null }])
    .reduce((a, e) => {
      const queue = e.starts.map((start) => ({ pos: start, steps: 0 }));
      const visited = [];
      while (queue.length) {
        const {
          pos: [i, j],
          steps,
        } = queue.shift();
        if (visited[i]?.[j]) {
          continue;
        }
        if (i === e.end[0] && j === e.end[1]) {
          return steps;
          break;
        }
        for (const [di, dj] of dirs) {
          if (
            e.map[i + di]?.[j + dj] === undefined ||
            e.map[i + di][j + dj] > e.map[i][j] + 1 ||
            visited[i + di]?.[j + dj]
          ) {
            continue;
          }
          queue.push({ pos: [i + di, j + dj], steps: steps + 1 });
        }
        visited[i] = visited[i] ?? [];
        visited[i][j] = true;
      }
    }, null)
);

console.log(
  "Part 2:",
  input
    .split('\n')
    .map(line => line.split(''))
    .reduce((a, e, i) => {
      a[0].map.push(e.map((char, j) => {
        let e;
        if (char === 'S' || char === 'a') {
          e = 0;
          a[0].starts.push([i, j]);
        } else if (char === 'E') {
          e = 25;
          a[0].end = [i, j];
        } else {
          e = char.codePointAt(0) - 'a'.codePointAt(0);
        }
        return e;
      }));
      return a;
    }, [{ map: [], starts: [], end: null }])
    .reduce((a, e) => {
      const queue = e.starts.map((start) => ({ pos: start, steps: 0 }));
      const visited = [];
      while (queue.length) {
        const {
          pos: [i, j],
          steps,
        } = queue.shift();
        if (visited[i]?.[j]) {
          continue;
        }
        if (i === e.end[0] && j === e.end[1]) {
          return steps;
          break;
        }
        for (const [di, dj] of dirs) {
          if (
            e.map[i + di]?.[j + dj] === undefined ||
            e.map[i + di][j + dj] > e.map[i][j] + 1 ||
            visited[i + di]?.[j + dj]
          ) {
            continue;
          }
          queue.push({ pos: [i + di, j + dj], steps: steps + 1 });
        }
        visited[i] = visited[i] ?? [];
        visited[i][j] = true;
      }
    }, null)
);
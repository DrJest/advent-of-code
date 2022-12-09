const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '8.txt')).toString('utf-8').replace(/\r/g, '');

console.log(
  "Part 1:",
  input
    .split("\n")
    .map(r => r.split('').map(Number))
    .map((v, i, a) => v.map(
      (t, j) => {
        if (i === 0 || i === a.length - 1 || j === 0 || j === v.length - 1) return true;
        let bl = false, br = false, bt = false, bb = false;
        for (let y = 0; y < i; y++) {
          (a[y][j] >= t) && (bt = true);
        }
        for (let y = i + 1; y < a.length; y++) {
          (a[y][j] >= t) && (bb = true);
        }
        for (let x = 0; x < j; x++) {
          (v[x] >= t) && (bl = true);
        }
        for (let x = j + 1; x < v.length; x++) {
          (v[x] >= t) && (br = true);
        }
        return !(bl && br && bt && bb);
      })
    )
    .reduce((a, v) => a.concat(v), [])
    .filter(v => v)
    .length
);


console.log(
  "Part 2:",
  input
    .split("\n")
    .map(r => r.split('')
      .map(Number))
    .map((v, i, a) => v.map((t, j) => {
      if (i === 0 || i === a.length - 1 || j === 0 || j === v.length - 1) return 0;
      let vl = 1, vr = 1, vt = 1, vb = 1;
      for (let y = i - 1; y > 0; y--) {
        if (a[y][j] >= t) break;
        vt++;
      }
      for (let y = i + 1; y < a.length - 1; y++) {
        if (a[y][j] >= t) break;
        vb++;
      }
      for (let x = j - 1; x > 0; x--) {
        if (v[x] >= t) break;
        vl++;
      }
      for (let x = j + 1; x < v.length - 1; x++) {
        if (v[x] >= t) break;
        vr++;
      }
      return vl * vr * vt * vb;
    })
    )
    .reduce((a, v) => a.concat(v), []).reduce((a, v) => Math.max(a, v))
);
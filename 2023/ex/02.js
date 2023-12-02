const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, '..', 'inputs', '02.txt'), 'utf8');

let avCubes = {
  R: 12,
  G: 13,
  B: 14
};

let [result1, result2] = input.split('\n').map(line => {
  let game = line.match(/Game (\d+)/)[1];
  let blue = line.match(/(\d+) blue/g).map(x => parseInt(x.match(/\d+/)[0])).reduce((a, b) => Math.max(a, b), 0);
  let red = line.match(/(\d+) red/g).map(x => parseInt(x.match(/\d+/)[0])).reduce((a, b) => Math.max(a, b), 0);
  let green = line.match(/(\d+) green/g).map(x => parseInt(x.match(/\d+/)[0])).reduce((a, b) => Math.max(a, b), 0);
  return { game, blue, red, green };
}).reduce((a, b) => {
  if (b.red <= avCubes.R && b.blue <= avCubes.B && b.green <= avCubes.G) {
    a[0] += Number(b.game);
  }
  a[1] += b.red * b.blue * b.green;
  return a;
}, [0, 0]);

console.log(result1);
console.log(result2);
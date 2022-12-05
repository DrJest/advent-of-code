const hash = require('./hash.js');
const input = "stpzcrnm";

let used = 0, grid = [];

const countBits = num => {
  return num > 0 ? (num % 2) + countBits(num >> 1) : 0
}

const c = (x,y) => (x < 0 || y < 0 || x > 127 || y > 127) ? 0 : grid[x][y];

const rmGrp = (x,y) => {
  if (c(x, y) == 0) return
  grid[x][y] = 0
  rmGrp(x + 1, y)
  rmGrp(x - 1, y)
  rmGrp(x, y + 1)
  rmGrp(x, y - 1)
}

for (let i = 0; i < 128; ++i) {
  let h = hash(input + '-' + i).split('').map(x => parseInt(x, 16))
  used += h.map(countBits).reduce((a,b) => a+b)
  grid.push(h.map(x => ("0000"+ x.toString(2)).substr(-4)).join("").split("")) // convert hash to binary
}

console.log(used);

let groups = 0
for (let x = 0; x < 128; x++) {
  for (let y = 0; y < 128; y++) {
    if (c(x,y) == 1) {
      rmGrp(x, y)
      groups++
    }
  }
}

console.log(groups);
const fs = require('fs');
const input = fs.readFileSync('input-3.txt').toString().split('\n').map(l => l.trim());

const map = [];

for(let s of input) {
  let d = s.slice(1).replace(/[^\d]/g, ' ').split(/\s+/).map(Number)
  let id = d[0],
      x = d[1],
      y = d[2],
      w = d[3],
      h = d[4];
  for(let j = y; j < y + h; ++j) {
    map[j] = map[j] || [];
    for(let i = x; i < x + w; ++i) {
      map[j][i] = map[j][i] || [];
      map[j][i].push(id);
      map[j][i].count++;
    }
  }
}

let overlap = 0, d = [];

for(let j in map) {
  for(let i in map[j]) {
    if(map[j][i].length > 1) {
      overlap++;
      map[j][i].forEach(id => {
        if(d.indexOf(id) === -1) {
          d.push(id);
        }
      })
    }
  }
}

console.log(overlap)

let free = d.sort((a,b) => a-b).reduce((a,v,i) => {
  (v !== i+1) && (a === null) && (a = (v+i)/2);
  return a;
}, null);

console.log(free);
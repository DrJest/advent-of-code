const fs = require('fs');
const input = fs.readFileSync('input-6.txt').toString().replace(/\r/g, '').split('\n').map(l=>l.trim());

function mdistance(x1,y1,x2,y2) {
  return Math.abs(x2-x1) + Math.abs(y2-y1);
}

const pts = input.map( l => {
  let x = parseInt(l.split(',')[0].trim());
  let y = parseInt(l.split(',')[1].trim());
  return { x, y };
} )

let xMax = 0, yMax = 0;

for(let i of pts) {
  if(i.x>xMax) xMax = i.x
  if(i.y>yMax) yMax = i.y
}

let xMin = -xMax, yMin = -yMax;
xMax *= 2;
yMax *= 2;
let matrix = [];

for(let j = yMin; j < yMax; ++j) {
  matrix[j] = matrix[j] || [];
}

for(let y = yMin; y < yMax; ++y) {
  for(let x = xMin; x < xMax; ++x) {
    matrix[y][x] = {
      d: Infinity,
      c: []
    }
    for(let c = 0; c < pts.length; ++c) {
      let p = pts[c];
      let d = mdistance(p.x, p.y, x, y);
      if(d < matrix[y][x].d) {
        matrix[y][x].d = d
        matrix[y][x].c = [c];
      }
      else if(d === matrix[y][x].d) {
        matrix[y][x].c.push(c);
      }
    }
  }
}


/* this prints the whole area
let ab = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ';
for(let y = 0; y < yMax; ++y) {
  let line = '';
  for(let x = 0; x < xMax; ++x) {
    let c = matrix[y][x].c;
    line += ( c.length === 1 ? c[0] : '.' )
  }
  //console.log(line);
}
*/

let counts = {};
let isEdge = [];

for(let y = yMin; y < yMax; ++y) {
  for(let x = xMin; x < xMax; ++x) {
    let c = matrix[y][x].c;
    for(let p of c) {
      if(c.length === 1) {
        if(x === xMin || y === yMin || x === xMax || y === yMax) isEdge.push(p)
        counts[ p ] = (counts[ p ] || 0) + 1;
      }
    }
  }
}

isEdge = Array.from(new Set(isEdge));

let k = Object.keys(counts).filter(i=>isEdge.indexOf(parseInt(i))===-1).sort((a,b) => counts[b]-counts[a])

console.log(counts[k[0]])

let inRegion = 0;

for (let y = -yMax; y < yMax; ++y) {
  for (let x = -xMax; x < xMax; ++x) {
    let totalDist = 0;
    for (let p of pts) {
      totalDist += mdistance(x,y,p.x,p.y);
    }
    if (totalDist < 10000) inRegion++;
  }
}

console.log(inRegion);
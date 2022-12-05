const fs = require('fs');
const input = fs.readFileSync('input-2.txt').toString().split('\n');

//part 1

let has2 = 0, has3 = 0;

for(let i of input) {
  let a = i.split('').sort().join('').match(/(.)\1+/g);
  let hz2 = 0, hz3 = 0;
  if(a && a.length) {
    for(let j of a) {
      if(j.length === 2) hz2 = 1;
      if(j.length === 3) hz3 = 1;
    }
  }
  if(hz2) has2++;
  if(hz3) has3++;
}

console.log(has2*has3)

//part 2
for(let cur of input) {
  for(let i = 0; i < input.length; ++i) {
    let common = '';
    for(let w in cur) {
      if(cur[w] === input[i][w]) common += cur[w];
    }
    if(common.length === cur.length -1) {
      console.log(common);
      process.exit();
    }
  }
}
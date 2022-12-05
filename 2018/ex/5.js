const fs = require('fs');
const input = fs.readFileSync('input-5.txt').toString().replace(/\r/g, '').split('\n').map(l=>l.trim());

let ab = 'abcdefghijklmnopqrstuvwxyz';
let npt = input[0];

let rgx = new RegExp(ab.split('').reduce((a,i) => {
  a.push(i+i.toUpperCase());
  a.push(i.toUpperCase()+i);
  return a;
}, []).join('|'), 'g');

while(npt.replace(rgx,'').length !== npt.length) {
  npt = npt.replace(rgx,'');
}

console.log(npt.length)

let minlength = null;

for(let i in ab) {
  npt = input[0];
  npt = npt.replace(new RegExp('['+ab[i]+']+', 'gi'), '');
  while(npt.replace(rgx,'').length !== npt.length) {
    npt = npt.replace(rgx,'');
  }
  if(minlength === null || npt.length < minlength) {
    minlength = npt.length
  }
}

console.log(minlength);
"use strict";

const fs = require('fs');
const input = fs.readFileSync('16.txt').toString().split(',');
const alphabet = 'abcdefghijklmnop'.split('');


const swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

input.forEach(l => {
    if(l[0]==='s') {
        let n = parseInt(l.replace('s', ''));
        for(let i = 0; i < n; ++i) {
            alphabet.unshift(alphabet.pop())
        }
    }
    if(l[0]==='x') {
        let n = l.replace('x', '').split('/').map(x=>parseInt(x));
        swap.apply(alphabet, n);
    }
    if(l[0]==='p') {
        let n = l.replace('p', '').split('/').map(x=>alphabet.indexOf(x));
        swap.apply(alphabet, n);
    }
})

console.log(alphabet.join(''))
"use strict";

const fs = require('fs');
const input = fs.readFileSync('10.txt').toString().split('').map(x=>x.charCodeAt(0)).concat([17, 31, 73, 47, 23]);

const stdList = Array.apply(null, { length: 256 }).map((e,i)=>i);

let p = 0, skip = 0;

let rounds = 64;

for(let i = 0; i < rounds; ++i) {
    input.forEach(l => {
        let t = [];
        for (let x = 0; x < l; x++) {
            t.unshift(stdList[(p + x) % stdList.length]);
        }
        for (let x = 0; x < l; x++) {
            stdList[(p + x) % stdList.length] = t[x];
        }
        p = (p+ l + skip++) % (stdList.length);
    });
}

let dense = []
for (let i = 0; i < 256; i += 16)
  dense.push(stdList.slice(i, i + 16).reduce((a, b) => a^b))

let R = dense.map(x => ("0" + x.toString(16)).substr(-2)).join("")

console.log(R);
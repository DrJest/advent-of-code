"use strict";

const fs = require('fs');
const input = fs.readFileSync('10.txt').toString().split(',').map(x=>parseInt(x));
//const input = [3,4,1,5];

const stdList = Array.apply(null, { length: 256 }).map((e,i)=>i);

let p = 0, skip = 0;

input.forEach(l => {
    let t = [];
    for (let at = p, x = 0; x < l; x++) {
        at = (p + x) % stdList.length;
        t.unshift(stdList[at]);
    }
    for (let at = p, x = 0; x < l; x++) {
        at = (p + x) % stdList.length;
        stdList[at] = t[x];
    }
    p = (p+ l + skip++) % (stdList.length);
});

console.log(stdList);
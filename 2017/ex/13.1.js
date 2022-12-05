"use strict";

const fs = require('fs');
const fw = [];
const input = fs.readFileSync('13.txt').toString().split('\r\n').map(x=>x.split(': ').map(x=>parseInt(x)));

let pp = input
    .filter(([d, r]) => d % (2 * (r - 1)) === 0)
    .reduce((s, [d, r]) => s + d * r, 0);

console.log(pp)

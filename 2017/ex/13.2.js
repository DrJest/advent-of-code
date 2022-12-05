"use strict";

const fs = require('fs');
const fw = [];
const input = fs.readFileSync('13.txt').toString().split('\r\n').map(x=>x.split(': ').map(x=>parseInt(x)));

for(let delay = -1; ; ++delay) {
    if(input
        .filter(([d, r]) => (delay + d) % (2 * (r - 1)) === 0)
        .reduce((s, [d, r]) => s + (delay + d) * r, 0) === 0) {
        console.log(delay);
        break;
    }
}
"use strict";

const fs = require('fs');
let input = fs.readFileSync('8.txt').toString();
let lines = input.split('\r\n').map(l => l.split(' '));
let uz = {};

lines.forEach(l => {
	(eval((uz[l[4]] || 0) + l[5] + l[6]))  && (uz[l[0]] = (uz[l[0]] || 0) + (l[1] == 'inc' ? 1 : -1) * parseInt(l[2]));
});

console.log(Math.max.apply(null, Object.values(uz)))
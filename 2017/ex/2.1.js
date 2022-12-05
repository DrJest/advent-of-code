"use strict";

const fs = require('fs');

let input = fs.readFileSync('2.txt').toString();

let lines = input.split('\r\n');

let sum = 0;
lines.forEach(line => {
	let units = line.split('\t').map(u=>parseInt(u));
	let max = Math.max.apply(null, units),
		min = Math.min.apply(null, units);
	sum += max - min;
});

console.log(sum);
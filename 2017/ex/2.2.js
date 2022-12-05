"use strict";

const fs = require('fs');
let input = fs.readFileSync('2.txt').toString();
let lines = input.split('\r\n');
let sum = 0;
lines.forEach(line => {
	let units = line.split('\t').map(u=>parseInt(u));
	units = units.sort((i,j) => parseInt(i) - parseInt(j));
	for(let i  = units.length - 1; i > 0; --i) {
		for(let j = 0; j<i; ++j) {
			let d = units[i]/units[j];
			if( d == parseInt(d) ) {
				sum += parseInt(d);
			}
		}
	}
});
console.log(sum);
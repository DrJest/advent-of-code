"use strict";

const fs = require('fs');

let input = fs.readFileSync('4.txt').toString();

let lines = input.split('\r\n');

let valid = 0;

lines.forEach(line => {
	let words = line.split(' ');
	if(words.length === new Set(words).size) 
		valid++;
});

console.log(valid);
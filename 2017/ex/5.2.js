"use strict";

const fs = require('fs');
const input = fs.readFileSync('5.txt').toString();
const lines = input.split('\r\n').map(x=>parseInt(x));

let moves = 0;
let index = 0;
let offset = 0;

while(index !== lines.length) {
	moves++;
	index += offset<3 ? ++lines[index] : --lines[index];
	offset = lines[index];
}

console.log(moves)
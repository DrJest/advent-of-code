"use strict";

const fs = require('fs');
const input = fs.readFileSync('23.txt').toString().split('\r\n').map(x=>x.split(' '));

const reg = {
	a: 0,
	b: 0,
	c: 0,
	d: 0,
	e: 0,
	f: 0,
	g: 0,
	h: 0
};

let count = 0;

const getV = x => {
    let y = Number(x);
    return isNaN(y) ? reg[x] : y;
};

let i = 0;

while(i < input.length) {
	let line = input[i];
	switch(line[0]) {
		case 'set':
			reg[line[1]] = getV(line[2]);
		break;
		case 'sub': 
			reg[line[1]] -= getV(line[2]);
		break;
		case 'mul':
			reg[line[1]] *= getV(line[2]);
			count++;
		break;
		case 'jnz':
			if(getV(line[1]) !== 0) {
				i += getV(line[2]);
				continue;
			}
	}
}

console.log(count);
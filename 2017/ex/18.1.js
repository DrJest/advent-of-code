"use strict";

const fs = require('fs');
const fw = [];
const input = fs.readFileSync('18.txt').toString().split('\r\n').map(x=>x.split(' '));

const reg = {};
let played = [];

const getV = x => {
    let y = Number(x);
    return isNaN(y) ? (reg[x] || 0): y;
};

let i = 0;
while(i < input.length) {
	let line = input[i];
	if(reg[line[1]] === undefined) reg[line[1]] = 0;
	switch(line[0]) {
		case 'set':
			reg[line[1]] = getV(line[2]);
		break;
		case 'add':
			reg[line[1]] += getV(line[2]);
		break;
		case 'mul':
			reg[line[1]] *= getV(line[2]);
		break;
		case 'mod': 
			reg[line[1]] %= getV(line[2]);
		break;
		case 'snd':
			played.push({
				r: line[1],
				v: parseInt(reg[line[1]])
			})
		break;
		case 'rcv':
			if(reg[line[1]] > 0) {
				console.log(JSON.stringify(played))
				process.exit();
			}
		break;
		case 'jgz':
			if(reg[line[1]] > 0) {
				i += getV(line[2]);
				console.log(reg, i);
				continue;
			}
		break;
	}
}

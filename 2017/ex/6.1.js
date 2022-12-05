"use strict";

const fs = require('fs');
const input = fs.readFileSync('6.txt').toString();
const lines = input.split('\r\n');
const banks = lines[0].split('\t').map(x=>parseInt(x));

let states = [];

while(1) {
	let state = banks.join(' ');
	if( states.indexOf(state) > -1 ) {
		break;
	}
	states.push(state);
	let max = Math.max.apply(null, banks);
	let maxi = banks.indexOf(max);
	for(let i = 1; max > 0; ++i) {
		let j = maxi + parseInt(i) < banks.length ? maxi + parseInt(i) : (maxi + parseInt(i)) % banks.length;
		banks[j]++;
		banks[maxi]--;
		max--;
	}
}
console.log(states.length);
"use strict";

const input = 366;
const rounds = 2017;
let buf = [0];
let pos = 0;

for( let i = 1; i <= rounds; ++i ) {
	pos = 1 + (pos + input) % i;
	buf.splice(pos, 0, i);
} 

console.log(buf[buf.indexOf(2017) + 1]);
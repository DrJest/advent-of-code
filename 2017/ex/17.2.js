"use strict";
const start = new Date().getTime();
const input = 366;
const rounds = 5e7;
let pos = 0;
let R = -1;

for( let i = 1; i <= rounds; ++i ) {
	pos = 1 + (pos + input) % i;
	(pos === 1) && (R = i);
} 

const end = new Date().getTime();
console.log( end - start );
console.log(R);

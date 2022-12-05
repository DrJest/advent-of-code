"use strict";

const fs = require('fs');
const input = fs.readFileSync('23.txt').toString().split('\r\n').map(x=>x.split(' '));

const getV = x => {
    let y = Number(x);
    return isNaN(y) ? reg[x] : y;
};

let a = 1,
	b = 67,
	c = 67,
	d = 0,
	e = 0,
	f = 0,
	g = 0,
	h = 0;

if(a !== 0) {
	b = b * 1e2 + 1e5;
	c = b + 17e3;
}

do {
	f = 1;
	d = 2;
	e = 2;
	for( d = 2; d*d <= b; ++d ) {
		if ( b % d === 0 ) {
			f = 0;
			break;
		}
	}
	if( f === 0 ) {
		h++;
	}
	g = b - c;
	b += 17
}
while ( g !== 0 );

console.log(h);
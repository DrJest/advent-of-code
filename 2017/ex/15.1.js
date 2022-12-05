"use strict";

const fs = require('fs');
const fw = [];

const div = 2147483647;
const genAFactor = 16807,
	  genBFactor = 48271;

let genA = 512,
	genB = 191,
	t = 0;


for(let i = 0; i < 40e6; ++i) {
	genA = parseInt((genA * genAFactor) % div)
	genB = parseInt((genB * genBFactor) % div)

	t += (genA & 0xFFFF) == (genB & 0xFFFF); 
}

console.log(t);

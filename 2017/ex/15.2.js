"use strict";

const fs = require('fs');
const fw = [];

const div = 2147483647;
const genAFactor = 16807,
	  genBFactor = 48271;

const next = (val, factor, x) => (val = (val * factor % div)) % x ? next(val, factor, x) : val

let genA = 512,
	genB = 191,
	t = 0;


for(let i = 0; i< 5e6; ++i) {
	genA = next(genA, genAFactor, 4)
	genB = next(genB, genBFactor, 8)

	t += (genA & 0xFFFF) == (genB &0xFFFF); 
}

console.log(t);

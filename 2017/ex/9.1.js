"use strict";

const fs = require('fs');
let input = fs.readFileSync('9.txt').toString().split('');

let score = 0, 
	depth = 0, 
	ig = 0, 
	skip = 0;

input.forEach(c => {
	if(ig) {
		if(skip) {
			return skip = !1;
		}
		if(c==='!') skip = !0;
		else if(c==='>') ig = !1;
	} else {
		if(c==='{') {
			depth++;
		}
		else if(c==='}') {
			score += depth;
			depth--;
		}
		else if(c==='<') {
			ig = !0;
		}
	}
});

console.log(score);
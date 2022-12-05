"use strict";

const fs = require('fs');
const input = fs.readFileSync('11.txt').toString().split(',');
const cube_distance = (a, b) => {
    return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2
}

let x=0,y=0,z=0;

input.forEach(d => {
	switch(d) {
		case 'n':
			y++;
			z--;
		break;
		case 'ne':
			x++;
			z--;
		break;
		case 'nw':
			x--;
			y++;
		break;
		case 's':
			y--;
			z++;
		break;
		case 'se':
			x++;
			y--;
		break;
		case 'sw':
			x--;
			z++;
		break;
	}
})

console.log(cube_distance({x:0,y:0,z:0}, {x,y,z}));

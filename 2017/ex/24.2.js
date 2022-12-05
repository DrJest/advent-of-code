"use strict";

const fs = require('fs');
const input = fs.readFileSync('24.txt').toString('utf-8').split('\r\n').map(x=>x.split('/').map(Number));

const genBridges = (bridge, pieces, conn) => {
	let bridges = [];
	for(let i = 0; i < pieces.length; ++i) {
		if(pieces[i][0] === conn || pieces[i][1] === conn) {
			let newB = {
				stregth: bridge.stregth + pieces[i][0] + pieces[i][1],
				length: bridge.length + 1
			};
			bridges.push(newB);
			let left = pieces.slice();
			left.splice(i, 1);

			let newC = pieces[i][0] === conn ? pieces[i][1] : pieces[i][0];
			bridges = bridges.concat(genBridges(newB, left, newC));
		}
	}
	return bridges;
}

let bridges = genBridges({ stregth: 0, length: 0 }, input, 0);
let maxLength = -1;

bridges = bridges.sort((a,b) => b.length - a.length).reduce((a, x) => { maxLength = Math.max(maxLength, x.length); a.push(x); return a; }, []).filter(x=>x.length===maxLength).sort((a,b) => b.stregth - a.stregth);

console.log(bridges[0].stregth)
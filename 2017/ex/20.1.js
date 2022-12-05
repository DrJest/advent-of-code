"use strict";

const fs = require('fs');
const fw = [];
const input = fs.readFileSync('20.txt').toString().split('\r\n').map(c => c.split(', ').map(a => a.slice(3).slice(0,-1).split(',').map(Number)));

const xyz = ([x, y, z], [dx, dy, dz]) => [x + dx, y + dy, z + dz]
const mdist = ([x,y,z]) => Math.abs(x) + Math.abs(y) + Math.abs(z)
const spos = ([a,b,c], [x,y,z]) => (a == x && b == y && c == z)
const dist = [];
const seen = [];

for(let i = 0; i < 1000; i++){
    input.forEach((particle, index) => {
        var pos = particle[0];
        var vel = particle[1];
        var acc = particle[2];

        particle[1] = xyz(vel, acc);
        particle[0] = xyz(pos, particle[1]);

        dist[index] = mdist(particle[0]);
    });
}

console.log(dist.indexOf(Math.min(...dist)));

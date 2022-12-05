"use strict";

const fs = require('fs');
const input = fs.readFileSync('18.txt').toString().split('\n').map(l => l.split(' ').map(r => r.trim()));

const P = function(pid) {
    this.reg = { p: pid };
    this.rcvQueue = [];
    this.pc = 0;
    this.idle = false;
    this.sentValues = 0;
}

const P0 = new P(0);
const P1 = new P(1);

let count = 0;

function next(p0, p1) {
    function getV(x) {
        let y = Number(x);
        return isNaN(y) ? (p0.reg[x] || 0): y;
    }
    let line = input[p0.pc];
    switch(line[0]) {
        case 'set':
            p0.reg[line[1]] = getV(line[2]);
        break;
        case 'add':
            p0.reg[line[1]] += getV(line[2]);
        break;
        case 'mul':
            p0.reg[line[1]] *= getV(line[2]);
        break;
        case 'mod':
            p0.reg[line[1]] %= getV(line[2]);
        break;
        case 'snd':
            p1.rcvQueue.push(getV(line[1]));
            p0.sentValues++;
        break;
        case 'rcv':
            if(p0.rcvQueue.length !== 0) {
                p0.reg[line[1]] = p0.rcvQueue[0];
                p0.rcvQueue.splice(0, 1);
            } else {
                p0.pc--;
                p0.idle = true;
            }
        break;
        case 'jgz':
            if(getV(line[1]) > 0) {
                p0.pc += getV(line[2]) - 1;
            }
        break;
    }
    p0.pc++;
}

const start = new Date().getTime();

while(1) {
    next(P0, P1);
    next(P1, P0);
    
    if(P0.idle && P1.idle) {
        break;
    }
}

console.log(P1.sentValues);
console.log(new Date().getTime() - start);
"use strict";

const fs = require('fs');
const input = fs.readFileSync('7.txt').toString();
const lines = input.split('\r\n');

const parse = s => s.match(/(\w+) \((\d+)\)(?: -> (.+))?/);
const Map = lines.map(parse).reduce((o, [, name, w, nodes]) =>
    Object.assign(o, { [name]: { name, w: +w, nodes: nodes && nodes.split(', ') } }), {});
const branches = Object.values(Map);
const notParent = ({ name }) => ({ nodes }) => !nodes || !nodes.includes(name);
const head = branches.filter(t => branches.every(notParent(t)))[0];

const getNorm = ([x, y, z]) => (x === y ? x : z);
const findExt = a => (norm => ({ i: a.findIndex(x => x !== norm), norm }))(getNorm(a));
const sum = a => a.reduce((acc, x) => acc + x, 0);
const correctError = ({ w, nodes }) => {
    if (!nodes) return [w, 0];
    const rec = nodes.map(name => correctError(Map[name]));
    const ws = rec.map(res => res[0]);
    const fix = (rec.find(res => res[1]) || [])[1] || 0;
    const { i, norm } = findExt(ws);
    if (fix || i < 0 || !norm) return [w + ws[0] * ws.length, fix];
    return [w + sum(ws) + norm - ws[i], Map[nodes[i]].w + norm - ws[i]];
};

console.log(correctError(head)[1]);
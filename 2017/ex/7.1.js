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

console.log(head.name)
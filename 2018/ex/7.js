const fs = require('fs');
const input = fs.readFileSync('input-7.txt').toString().replace(/\r/g, '').split('\n').map(l=>l.trim());
const tsort = require('tsort');

let graph = {}, met = [];

for(let i of input) {
  let dep = i[5], cur = i[36];
  met.push(dep, cur)
  graph[cur] = graph[cur] || [];
  graph[cur].push(dep)
}

let noDeps = [];

for(let i of met) {
  if( ! graph[i] ) {
    noDeps.push(i)
  }
}

noDeps = Array.from(new Set(noDeps))

noDeps.forEach(i => {
  graph[i] = [];
})

const orderedGraph = {};
Object.keys(graph).sort().forEach(function(key) {
  orderedGraph[key] = graph[key].sort();
});

graph = tsort();

for(let i in orderedGraph) {
  for(let j of orderedGraph[i]) {
    graph.add(j, i)
  }
}

console.log(graph.sort().join(''));


return;
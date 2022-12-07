const input = require('fs').readFileSync(require('path').join(__dirname, '..', 'inputs', '7.txt')).toString('utf-8').replace(/\r/g, '');
const rootFs = { root: { $type: 'dir', $size: 0, $maxSize: 70000000, $reqSize: 30000000 }, cur: null };

const { size, minSize } = (function walk(f, size, minSize, toFree) {
  (!f.$parent) && (toFree = f.$reqSize - (f.$maxSize - f.$size));
  (f.$type === 'dir' && f.$size < 100000) && (size += f.$size);
  (f.$type === 'dir' && f.$size > toFree && f.$size < minSize) && (minSize = f.$size);
  if (f.$type === 'file') {
    return { size, minSize };
  }
  for (let k in f) {
    if (k[0] === '$') continue;
    const { size: s, minSize: m } = walk(f[k], size, minSize, toFree);
    size = s;
    minSize = m;
  }
  return { size, minSize };
})(input
  .split('\n')
  .filter(x => x)
  .map(x => x.split(' '))
  .reduce((a, l) => {
    let root = a.root;
    let cur = a.cur || root;
    if (l[0] === '$' && l[1] === 'cd') {
      if (l[2] === '/') {
        cur = root;
        a.cur = cur;
        return a;
      }
      if (l[2] === '..') {
        cur = cur.$parent;
        a.cur = cur;
        return a;
      }
      cur[l[2]] = cur[l[2]] || { $type: 'dir', $parent: cur, $size: 0 };
      cur = cur[l[2]];
      a.cur = cur;
      return a;
    }
    if (l[0] === '$' && l[1] === 'ls') {
      a.cur = cur;
      return a;
    }
    if (l[0] === 'dir') {
      cur[l[1]] = cur[l[1]] || { $type: 'dir', $parent: cur, $size: 0 };
      a.cur = cur;
      return a;
    }
    cur[l[1]] = { $type: 'file', $size: parseInt(l[0]) }
    cur.$size += cur[l[1]].$size;
    let d = cur.$parent;
    while (d) {
      d.$size += cur[l[1]].$size;
      d = d.$parent;
    }
    a.cur = cur;
    return a;
  }, rootFs)
  .root, 0, Infinity);

console.log("Part 1:", size);
console.log("Part 2:", minSize);
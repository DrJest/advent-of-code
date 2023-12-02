const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, '..', 'inputs', '01.txt'), 'utf8');

const numbersToDigits = {
  one: '1',
  '1': '1',
  two: '2',
  '2': '2',
  three: '3',
  '3': '3',
  four: '4',
  '4': '4',
  five: '5',
  '5': '5',
  six: '6',
  '6': '6',
  seven: '7',
  '7': '7',
  eight: '8',
  '8': '8',
  nine: '9',
  '9': '9',
};

let result1 = input.split('\n').reduce((acc, curr) => {
  let numbers = curr.match(/\d/g);
  let first = numbers.shift();
  let last = numbers.pop() || first;
  const result = acc + Number(first * 10) + Number(last);
  return result;
}, 0);

console.log(result1);

let result2 = input.split('\n').map((line, index) => {
  let firstIndex, lastIndex, first, last;
  for (let k in numbersToDigits) {
    let p1 = line.indexOf(k);
    let p2 = line.lastIndexOf(k);
    if (firstIndex === undefined && p1 !== -1) {
      firstIndex = p1;
      first = numbersToDigits[k];
    }
    if (lastIndex === undefined && p2 !== -1) {
      lastIndex = p2;
      last = numbersToDigits[k];
    }
    if (p1 !== -1 && p1 < firstIndex) {
      firstIndex = p1;
      first = numbersToDigits[k];
    }
    if (p2 !== -1 && p2 > lastIndex) {
      lastIndex = p2;
      last = numbersToDigits[k];
    }
  }
  return Number((first ?? '') + (last ?? ''));
}).reduce((acc, curr) => acc + curr, 0);

console.log(result2);

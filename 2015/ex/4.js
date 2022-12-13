const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '..', 'input', '4.txt')).toString().trim();

// advent of code 2015 day 4 part 1
let i = 0;
while (true) {
  let hash = require('crypto').createHash('md5').update(input + i).digest('hex');
  if (hash.startsWith('00000')) {
    console.log(i);
    break;
  }
  i++;
}

// advent of code 2015 day 4 part 2
i = 0;

while (true) {
  let hash = require('crypto').createHash('md5').update(input + i).digest('hex');
  if (hash.startsWith('000000')) {
    console.log(i);
    break;
  }
  i++;
}
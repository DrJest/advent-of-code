let fs = require('fs');
const path = require('path');
for (let n = 1; n < 25; ++n) {
  let nn = n.toString().padStart(2, '0');
  let stuff = `const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, '..', 'inputs', '${nn}.txt'), 'utf8');
  `;
  let filename = path.join(__dirname, 'ex', `${nn}.js`);
  fs.writeFileSync(filename, stuff);
  filename = path.join(__dirname, 'inputs', `${nn}.txt`);
  fs.writeFileSync(filename, '');
}

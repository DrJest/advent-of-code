const fs = require('fs');
const input = fs.readFileSync('input-4.txt').toString().replace(/\r/g, '').split('\n').map(l=>l.trim());

let npt = input.map(l => {
  return {
    date: new Date(l.match(/\[(.+)\]/)[1]),
    raw: l,
  }
}).sort((a,b) => a.date.getTime()-b.date.getTime())

//parte 1
let minutesasleep = {};
let curguard = null, falledasleep = null;

npt.forEach(l => {
  let rgx;
  if(rgx = l.raw.match(/Guard \#(\d+) begins shift/)) {
    curguard = rgx[1];
  }
  if(/falls asleep/.test(l.raw)) {
    falledasleep = l.date;
  }
  if(/wakes up/.test(l.raw)) {
    minutesasleep[curguard] = minutesasleep[curguard] || {
      id: parseInt(curguard),
      asleep: [],
      wakeup: [],
      minutes: 0
    };
    minutesasleep[curguard].asleep.push(falledasleep.getMinutes())
    minutesasleep[curguard].wakeup.push(l.date.getMinutes())
    minutesasleep[curguard].minutes += l.date.getMinutes() - falledasleep.getMinutes();
  }
});

let mostasleep = Object.values(minutesasleep).sort((a,b) => b.minutes-a.minutes)[0];

let minutes = {};

for(let i = 0; i<mostasleep.asleep.length; ++i){
  for(let j = mostasleep.asleep[i]; j < mostasleep.wakeup[i]; ++j) {
    minutes[j] = minutes[j] || 0;
    minutes[j]++;
  }
}

let sortedMinutes = Object.keys(minutes).sort((a,b) => minutes[b]-minutes[a])

console.log(parseInt(sortedMinutes[0]) * mostasleep.id)

//parte 2
let minutesall = {};

for(let i in minutesasleep) {
  for(let j in minutesasleep[i].asleep) {
    for( let m = minutesasleep[i].asleep[j]; m < minutesasleep[i].wakeup[j]; ++m  ) {
      let id = minutesasleep[i].id;
      minutesall[m] = minutesall[m] || {};
      minutesall[m][id] = minutesall[m][id] || 0;
      minutesall[m][id]++;
    }
  }
}

let minutescount = {};
for(let i in minutesall) {
  let s = Object.keys(minutesall[i]).sort((a,b) => {
    return minutesall[i][b] - minutesall[i][a];
  })[0];
  minutescount[i] = {
    id: s,
    times: minutesall[i][s]
  }
}

let mostocc = Object.keys(minutescount).sort((a,b) => {
  return minutescount[b].times - minutescount[a].times;
})[0];

console.log(mostocc * minutescount[mostocc].id);

const fs = require('fs');
const input = fs.readFileSync('2.txt').toString('utf8');

const a = input.split(',').map(i=>parseInt(i));

function intCode( a, n, v ) {
    a[1] = n;
    a[2] = v;
    for(let i = 0; i<a.length;i+=4) {
        let opCode = a[i];
        let p1 = a[i+1], p2 = a[i+2], p3 = a[i+3];
        if( opCode === 1 ) {
            a[p3] = a[p1] + a[p2];
        }
        else if( opCode === 2 ) {
            a[p3] = a[p1] * a[p2];
        }
        else if( opCode === 99 ) {
            break;
        }
        else {
            console.log('Something went wrong');
            break;
        }
    }
    return a[0];
}




for(let noun = 0; noun<100; ++noun) {
    for(let verb = 0; verb<100; ++verb) {
        let arr = Array.from(a);
        let opt = intCode( arr, noun, verb );
        if(opt === 19690720) {
            console.log(noun * 100 + verb);
            process.exit();
        }
    }
}
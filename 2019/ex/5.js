const fs = require('fs');
const input = fs.readFileSync('2.txt').toString('utf8');

const a = input.split(',').map(i=>parseInt(i));

let log = [];
const OPT = function(data) {
    log.push(data);
}

function setValue( a, i, m, v ) {
    a[ m ? i : a[i] ] = v;
}

function getValue( a, i, m ) {
    return a[ m ? i : a[i] ];
}

function intCode( a, p ) {
    let opCode = a[p] % 100;
    let m1 = Math.floor(a[p]/100)%10,
        m2 = Math.floor(a[p]/1000)%10,
        m3 = Math.floor(a[p]/10000)%10;
    if( opCode === 1 ) {
        let v = getValue( a, p+2, m2 ) + getValue( a, p+3, m3 );
        setValue( a, p+1, m1, v );
        return 4;
    }
    else if( opCode === 2 ) {
        let v = getValue( a, p+2, m2 ) * getValue( a, p+3, m3 );
        setValue( a, p+1, m1, v );
        return 4;
    }
    else if( opCode === 3 ) {
        setValue( a, p+1, m1, 1 );
        return 3;
    }
    else if( opCode === 4 ) {
        log( a, p+1 );
        return 3;
    }
    else if( opCode === 99 ) {
        return 0;
    }
    else {
        console.log('Something went wrong');
        return -1;
    }
}

let pc;

for( let i = 0; i < a.length; i += pc ) {
    pc = intCode( a, i );
    if( pc < 1 ) break;
}

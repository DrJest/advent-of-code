const fs = require('fs');
const input = fs.readFileSync('3.txt').toString('utf8');

const w1 = input.split('\n')[0].split(','),
        w2 = input.split('\n')[1].split(',');

function draw( w ) {
    let x = 0, y = 0;
    let points = [ { x,y } ];
    
    for( let inst of w ) {
        let dir = inst[0];
        let sts = parseInt( inst.substr(1) );
        for( let i = 0; i < sts; ++i ) {
            switch( dir ) {
                case 'U':
                    y++;
                    break;
                case 'R':
                    x++;
                    break;
                case 'D':
                    y--;
                    break;
                case 'L':
                    x--;
                    break;
            }
            points.push( { x,y } );
        }
    }

    return points;
}

let c1 = draw( w1 ), c2 = draw( w2 );

function intersect(a, b) {
    let ints = [];
    for( let i = 0; i < a.length; ++i ) {
        for( let j = 0; j < b.length; ++j ) {
            if( a[i].x === b[j].x && a[i].y === b[j].y ) {
                ints.push({
                    x: a[i].x,
                    y: a[i].y,
                    steps: i + j
                });
            }
        }
    }
    return ints;
}

let intersections = intersect( c1,c2 );

intersections.sort((a, b) => {
    return a.steps > b.steps;
});

console.log( intersections );
console.log( intersections[1] );
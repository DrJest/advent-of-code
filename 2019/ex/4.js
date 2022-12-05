let s = 271973, e = 785961;
let valid = 0;
for( let i = s; i < e; ++i ) {
	let str = i.toString();
    let a = str.split('');
    let doubles = 0, dec = 0;
    for(let j in a) {
        if(a[j]<a[j-1]) dec++;
        let c = a[j];
        let m = str.match( new RegExp( `([^${c}]|^)[${c}]{2}([^${c}]|$)` ) );
        if(m) doubles++;
    }
	if(!dec && doubles) valid++;
}
console.log( valid );
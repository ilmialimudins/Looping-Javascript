function segitigaSiku1(panjang){
    let segitiga='';
    for(let i = panjang; i > 0; i--){
        for(let j = 1; j <= panjang; j++){
            if(j >= i){
             jumlah=panjang;
        segitiga +=jumlah;
            }else {
                segitiga+=``;
            }
        }
        segitiga += `\n`;
    } return segitiga;
} console.log(segitigaSiku1(10));

function segitiga3(panjang) {
    let segitiga = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                jumlah=panjang;
                segitiga +=jumlah;
                // hasil += '* ';
            } else {
                segitiga += ' '
            }
        }
        segitiga += '\n';
    }
    return segitiga;
}
console.log(segitiga3(10));
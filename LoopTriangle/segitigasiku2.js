function segitigaSiku1( panjang){
    let segitiga=``;
    for(let i=0; i<panjang; i++){
        for(let j=panjang; j>i; j--){
            jumlah=panjang;
            segitiga +=jumlah;
        }
        segitiga += `\n`;
    } return segitiga;
} console.log(segitigaSiku1(10));
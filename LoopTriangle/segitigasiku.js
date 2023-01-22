function segitigaSiku(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            angka=panjang;
            hasil += angka;
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitigaSiku(5));
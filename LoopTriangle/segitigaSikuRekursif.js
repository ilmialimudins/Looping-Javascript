// // Cara 1

let hasil='';                           //string
let conter=0;                           //0
function segitiga(jumlahBaris){         // nama function dengan parameter jumlah baris
    hasil += '*';                       // string + String
    let index = jumlahBaris -1;         // 5-1 =4
    if (conter<=index &&conter%2==0){                 // jika 0  < 4 = true
        console.log(hasil);              // Tampilkan Hasil
        segitiga(index);                 // buat parameter baru 
    }
 }
segitiga(5)                                //function( parameter 5)

////////////////////////////////////////////////////////////////////////////////////////

//  Cara 2

function segitiga2(star){                // Nama function dengan parameter star
    if(star === 0){                     // jika parameter sama dengan 0 maka true
        return                          // kembalikan ke return
    }
    segitiga2(star -1)                   // parameter 5 -1 = 4
    console.log('*'.repeat(star))      // tampilkan hasil = String (*) diulangi Jumlah parameter star (5)
}
segitiga2(10)                             // function( parameter 5)





// console.log(hasil);
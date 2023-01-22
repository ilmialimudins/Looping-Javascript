// "Segitiga Siku Bilangan Genap (FOR)");
console.log("Segitiga Siku Bilangan Genap (FOR)");
console.log('\n')

function segitigaSiku(n) {
    let a = '0';
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        // Jika i adalah bilangan genap, tambahkan i ke a
        if (i % 2 == 0) {
          a += i ;
        }
        // Jika i bukan bilangan genap, tambahkan "-" ke a
        else {
          a += i;
        }
      }
      console.log(a);
      a = '';
    }
  }
  
  segitigaSiku(9);
  

// Segitiga Siku Bilangan Genap (While)");
// 
console.log('\n')
console.log("Segitiga Siku Bilangan Genap (While)");
console.log('\n')

function segitigaSiku(n) {
    let i = 0;
    let a = '0';
    while (i <= n) {
      let j = 0;
      while (j < i) {
        // Jika i adalah bilangan genap, tambahkan i ke a
        if (i % 2 == 0) {
          a += i;
        }
        // Jika i bukan bilangan genap, tambahkan " " ke a
        else {
          a +=i;  // 
        }
        j++;
      }
      console.log(a);
      a = '';
      i++;
    }
  }
  
  segitigaSiku(10);
  
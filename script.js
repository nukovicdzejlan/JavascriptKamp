// let ucenik = {
//   ime: "Muhhamed",
//   prezime: "Besirovic",
//   godine: 0,
// };

// ucenik.godine += 1;
// ucenik.ocena = 1;
// console.log(ucenik.ime);
// console.log(ucenik.godine);
// console.log(ucenik);

//funkcija kojoj prosledimo string ona ce nam vratiti objekat

function izbrojKaraktere(string) {
  let mapaKaraktera = {};
  for (let slovo of string) {
    if (mapaKaraktera[slovo]) {
      mapaKaraktera[slovo]++;
    } else {
      mapaKaraktera[slovo] = 1;
    }
  }
  let najvecaVrednost = 0;
  let najcesciKarakter = "";
  for (let kljuc in mapaKaraktera) {
    if (mapaKaraktera[kljuc > najvecaVrednost]) {
      najvecaVrednost = mapaKaraktera[kljuc];
      najcesciKarakter = kljuc;
    }
  }

  return (mapaKaraktera,najvecaVrednost);
}

let recenica = "aasd";
izbrojKaraktere(recenica);
console.log(mapaKaraktera);

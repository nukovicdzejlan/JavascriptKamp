// let niz = [1, 4554, 5, 44, 112, 4, 3, 2, 6, 7];

// console.log(niz.sort((a, b) => a - b));
// console.log(niz.reverse());
// console.log(Math.min(...niz));

// console.log(Math.max(...niz));

// let objekat = {
//   Ime: "Dzejlan",
//   prezime: "Nukovic",
// };

// let objekat2 = { ...objekat };
// let nizObjekata = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// niz.forEach((clan, i, array) => {
//   console.log(`Redni broj clana je : ${i + 1} a clan je ${clan}`);
//   //   console.log(array);
// });

// // let niz2 = niz.map((clan, i, array) => {
// //   return clan * 2;
// // });
// // console.log(niz2);

// let niz2 = niz.filter((clan, i, array) => {
//   if (clan % 2 === 0) {
//     return clan;
//   }
// });
// console.log(niz2);

// let suma = niz.reduce((a, b, ib, array) => {
//   return a + b;
// });
// console.log(suma);

// let res = niz.every((clan) => {
//   if (clan % 2 === 0) {
//     return true;
//   }
// });
// let res2 = niz.some((clan) => {
//   if (clan % 2 === 0) {
//     return true;
//   }
// });

// console.log(res, res2);

// let res3 = niz.find((clan) => {
//   if (clan % 3 === 0) {
//     return clan;
//   }
// });

// console.log(res3);

// sastaviti program konji ce ucitati niz od n elemanta i ispisati ih onim redosledom koji su ucitani
let niz = [];
let brojElemnata = parseInt(prompt("ubacite koliko zelite elemanta"));
for (let i = 0; i < brojElemnata; i++) {
  element = parseFloat(prompt("unesite element"));
  niz.push(element);
}
let suma = niz.reduce((a, b) => {
  return a + b;
});

let sredina = suma / brojElemnata;
console.log(suma);
console.log(sredina);

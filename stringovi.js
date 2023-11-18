// // // // let recenica = "Ana voli Milovana";

// // // // console.log(recenica.slice(-16, -3));
// // // // SUBSTRING
// // // // console.log(recenica.substring(0,4));
// // // // reokace,replace aall
// // // let rec = prompt("unesite recenicu");

// // // // console.log(rec.split(" ").length);
// // // let suglasnici = "";
// // // let samoglasnici = "";
// // // function brojSuglasnika(rec) {
// // //   for (let i = 0; i < rec.length; i++) {
// // //     if (rec.includes("a", "e", "i", "o", "u")) {
// // //       samoglasnici++;
// // //     } else {
// // //       suglasnici++;
// // //     }
// // //   }

// // //   return console.log(samoglasnici, suglasnici);
// // // }
// // // brojSuglasnika(rec);

// // let samoglasnici = ["a", "e", "i", "o", "u"];
// // while (true) {
// //   let brSamoglasnici = 0;
// //   let suglasnici = 0;
// //   let rec = prompt("unesite rec");
// //   if (rec === 0) break;
// //   for (let i = 0; i < rec.length; i++)
// //     if (samoglasnici.includes(rec[i])) {
// //       brSamoglasnici++;
// //     } else {
// //       suglasnici++;
// //     }

// //   console.log(`ima ${brSamoglasnici} samoglasnika i ${suglasnici} suglasnika`);
// // }

// let ulazniTekst = prompt("uneiste ulazni tekst");
// let velikaSlova = 0;
// let malaSlova = 0;
// let brojCifara = 0;

// for (let i = 0; i < ulazniTekst.length; i++) {
//   if (ulazniTekst[i] === ulazniTekst[i].toUpperCase()) {
//     velikaSlova++;
//   } else if (ulazniTekst[i] === ulazniTekst[i].toLowerCase()) {
//     malaSlova++;
//   } else {
//     brojCifara++;
//   }
// }
// console.log(velikaSlova, malaSlova, brojCifara);

// let rec = prompt("uneiste tekst");
// let recA = 0;
// for (let i = 0; i < rec.length; i++) {
//   if (rec[i] === "A") {
//     recA++;
//   }
// }
// console.log(
//   `u reci ${rec} slovo A se pojavljuje ${recA} puta sto je ${
//     (recA / rec.length) * 100
//   }%`
// );
//8.13
// let rec = prompt("unesite rec");

// console.log(rec.toLowerCase());

////////////////// 8.15\]

// let rec = prompt("unesite rec");

// console.log(rec[0].toUpperCase() + rec.slice(1).toLowerCase());

// 8,16
//
// let recenica = prompt("unesite recenicu");

// for (let word of recenica.split(" ")) {
//   console.log(word);
// }

// console.log("nesto nesto");

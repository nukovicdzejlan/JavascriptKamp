// // ////brojevi koji nisu deljivi sa 3 njuh ispisati
// // for (let i = 1; i < 20; i++) {
// //   if (i % 3 === 0) continue;
// // }
// // console.log(i);

// let slovo = prompt("Unesite slovo");
// switch (slovo) {
//   case "a":
//     console.log("samoglasnik");
//     break;
//   case "e":
//     console.log("samoglasnik");
//     break;
//   case "i":
//     console.log("samoglasnik");
//     break;
//   case "o":
//     console.log("samoglasnik");
//     break;
//   case "u":
//     console.log("samoglasnik");
//     break;
//   default:
//     console.log("Suglasnik je");
// }
let godina = parseInt(prompt("Unesite godinu:"));
let mesec = parseInt(prompt("Unesite mesec:"));
let dan = parseInt(prompt("Unesite dan:"));

let d = 0;

switch (mesec) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    // console.log("31");
    d = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    // console.log("30");
    d = 30;
    break;
  case 2:
    if ((godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0) {
      // console.log("29");
      d = 29;
    } else {
      // console.log("28");
      d = 28;
    }
    break;
  default:
    console.log("mesec nije dobar");
    break;
}

if (dan === d) {
  dan = 1;
  mesec++;
} else {
  dan++;
}
if (mesec > 12) {
  mesec = 1;
  dan = 1;
  godina++;
}

console.log(dan, mesec, godina);

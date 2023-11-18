// // let broj1 = parseInt(prompt("broj1"));
// // let broj2 = parseInt(prompt("broj2"));
// // let broj3 = parseInt(prompt("broj3"));
// // let broj4 = parseInt(prompt("broj4"));

// // const odrediMax = function (broj1, broj2) {
// //   if (broj1 === broj2) {
// //     return 0;
// //   } else if (broj1 > broj2) {
// //     return broj1;
// //   } else return broj2;
// // };

// // let pom1 = odrediMax(broj1, broj2);
// // let pom2 = odrediMax(broj3, broj4);

// // console.log(odrediMax(broj1, broj2));
// // console.log(odrediMax(broj3, broj4));
// // console.log(odrediMax(pom1, pom2));

// // 4*r*r*3.14//porvrsiana
// // (4/3)*3.14*r*r*r//zapremina
// //////////////////////////////// racunati zapreminu i povrsinu
// // let r = parseFloat(prompt("unesite precnik"));
// // const pi = 3.14;
// // let povrsina = function (r) {
// //   return 4 * r * r * pi;
// // };
// // let zapremina = function (r) {
// //   return (4 / 3) * pi * r * r * r;
// // };
// // console.log(povrsina(r));
// // console.log(zapremina(r));

// ///izracunati sumu kvadrata svih brojeav, samo parnih i neparnih za unete granice intervala

// function sumaBrojeva(a, b) {
//   let suma = 0;
//   for (let i = a; i <= b; i++) {
//     suma += i * i;
//   }
//   return suma;
// }
// function sumaParni(a, b) {
//   let suma = 0;
//   for (let i = a; a <= b; i++) {
//     if (i % 2 !== 0) continue;
//     suma += i * i;
//   }
//   return suma;
// }
// function sumaNeparni(a, b) {
//   let suma = 0;
//   for (let i = a; a <= b; i++) {
//     if (i % 2 === 0) {
//       continue;
//       suma += i * i;
//     }
//   }
//   return suma;
// }

// console.log(sumaBrojeva(1, 5));
// console.log(sumaParni(1, 5));
// console.log(sumaNeparni(1, 5));

// function faktorijal(a) {
//   let faktorijal = 0;
//   for (let i = a; i > 0; i--) {
//     faktorijal += a * i;
//   }
//   return faktorijal;
// }

// console.log(faktorijal(5));
//////////////////////////// 9,15
// Прост број је природан број већи од 1, дељив само бројем 1 и самим собом
// let broj = 3;
// function prostBroj() {
//   if (broj % broj === 0 && broj % 1 === 0) {
//     for (let i = broj; i < 500; i++) {
//       console.log(i);
//     }
//   }
// }

console.log(prostBroj(broj));

let broj = parseInt(prompt("unesi broj"));
function Prost(broj) {
  for (let i = 2; i < broj; i++)
    if (broj % 2 === 0) {
      return false;
    } else {
      return true;
    }
}

console.log(prost(broj));

// function faktorijal(n){
//     let faktorijal= 1
//     for(let i =1;i<=n;i++){
//         faktorijal*=i
//     }
//     return faktorijal
// }
// for
// let summa = 0;

// function suma() {
//   for (let a = 1; a >= 9; a++) {
//     for (let b = 0; b <= 9; b++) {
//       for (let c = 0; c <= 9; c++) {///////////////////// OVO NIJE TACNO
//         summa += a + b + c;
//       }
// //     }
// //   }
// //   return summa;
// // }
// // console.log(suma());
// function sumacifara(n) {
//   return Math.floor(n / 100) + (Math.floor(n / 10) % 10) + (n % 10);
// }

// function Nivenov(n) {
//   if (n % sumacifara === 0) return true;
// }
// for (let i = 100; i <= 200; i++) {
//   if (Nivenov(i)) {
//     console.log(i);
//   }
// }
// ///////////////////////////////////////Рекурзивне функције
// 9.29. Саставити рекурзивну функцију за одређивање факторијела целог броја, а затим је тестирати
// у главном програму за унети цео број n и исписати добијени резултат.

function faktorijal(n) {
  let faktorijal = 1;
  for (let i = 1; i <= n; i++) {
    faktorijal *= i;
  }
  return faktorijal;
}

// let lista = [1,2,3,4,5,23,21,31,23,12,3]

// lista.length

// let zbir=0
// for(let i=lista.length-1;i>=0;i--){
//    console.log(lista[i]);
// }

// for(let broj of lista){
//     let i=0
// }
// console.log(`Zbir je ${zbir}`);
//           0 1 2
// let lista = [1,2,3]
// let ucenik = {
//     ime:"Muhammed",
//     prezime:"Besirovic",
//     godine:28
// }
// lista[0]
// console.log(ucenik['godine']);
// // demmahuM
// for(let i=string.length-1;i>=0;i--){
//     naopako+=string[i]
// }
// let string = "Muhammed"
// let naopako = ''
// for(let slovo of string){
//     naopako = slovo + naopako
// }

// console.log(naopako);

let stringZaProveru = "oko";
function proveriDaLiJePalindrom(string) {
  let pocetak = 0;
  let kraj = string.length - 1;

  while (pocetak < kraj) {
    if (string[pocetak] !== string[kraj]) {
      return false;
    }
    pocetak++;
    kraj--;
  }
  return true;
}
console.log(proveriDaLiJePalindrom(stringZaProveru));

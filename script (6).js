// function anagram(string1,string2){
//     let mapaKaraktera = {}
//     let mapaKaraktera2 = {}
//     for(let slovo of string1){
//         if(mapaKaraktera[slovo]){
//             mapaKaraktera[slovo]++
//         } else {
//             mapaKaraktera[slovo] = 1
//         }
//     }
//     for(let slovo of string2){
//         if(mapaKaraktera2[slovo]){
//             mapaKaraktera2[slovo]++
//         } else {
//             mapaKaraktera2[slovo] = 1
//         }
//     }

//     if(string1.length!==string2.length){
//         return false
//     }

//     for(let kljuc in mapa1){
//         if(mapaKaraktera[kljuc]!==mapaKaraktera2[kljuc]){
//             return false
//         }
//     }

//     return true
// }
// anagram('asd','aaasd')

let mapaKaraktera = {};
for (let slovo of string) {
  if (mapaKaraktera[slovo]) {
    mapaKaraktera[slovo]++;
  } else {
    mapaKaraktera[slovo] = 1;
  }
}
console.log(mapaKaraktera);
let string = "ucimo programirane danas";

let rezultat = "Ucimo Programirane Danas";

function uvecajPrvoSlovo(string) {}

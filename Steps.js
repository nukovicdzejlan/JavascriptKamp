//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps()
//       '123'
//       '456'
//       '789'
// function steps(n){
//     let broj=1
//     for(let red=0;red<3;red++){
//         let string = ''
//         console.log(string);
//         for(let kolona = 0;kolona<3;kolona++){
//             string+=broj
//             broj++
//         }

//         // console.log(string);
//     }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {2
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }
// steps(5)

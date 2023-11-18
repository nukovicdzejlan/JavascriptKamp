let niz1 = [3, 4, 5, 6];
let niz2 = [4, 7, 20, 30];
// [3,4,4,5,6,7,20,30]

function sastaviSortiraneNizove(niz1, niz2) {
  let noviNiz = []; //[3]
  let pokazivac1 = niz1[0]; // 3
  let pokazivac2 = niz2[0]; // 4
  let i = 1;
  let j = 1;
  while (pokazivac1 || pokazivac2) {
    if (pokazivac1 < pokazivac2) {
      noviNiz.push(pokazivac1);
      pokazivac1 = niz1[i];
      i++;
    } else {
      noviNiz.push(pokazivac2);
      pokazivac2 = niz2[j];
      j++;
    }
  }
  return noviNiz;
}

console.log(sastaviSortiraneNizove(niz1, niz2));

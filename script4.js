const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
let str = "";
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1}days ...`;
  }
};
printForecast(data2);
console.log("..." + str);

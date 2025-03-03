const modulu = 4;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const diagonalArr1 = [];
const diagonalArr2 = [];

for (let i = 0, j = 1; i < modulu; i++, j++) {
  diagonalArr1.push(arr[i + modulu * i]);
  diagonalArr2.push(arr[(modulu - 1) * j]);
}

//the below is for the colomuns :
const arrofCol = [];
let i = 0,
  j = 0;

while (j < modulu) {
  const arrhelper = [];
  while (i < modulu) {
    arrhelper.push(arr[i * modulu + j]);
    i++;
  }
  j++;
  i = 0;
  arrofCol.push(arrhelper);
}

//the below is for the rows
const arrOfRows = [];

while (arr.length !== 0) {
  arrOfRows.push(arr.splice(0, modulu));
}

const CombinedArrays = [
  ...arrOfRows,
  ...arrofCol,
  [...diagonalArr1],
  [...diagonalArr2],
];
console.log(CombinedArrays);

/** @format */

let obj = {
  node2: {
    node0: 21,
    node1: 42,
  },
  node1: {
    node0: 14,
    node2: 44,
  },
  node0: {
    node2: 21,
    node1: 13,
  },
};

let two;
let one = Object.keys(obj).map((e) => {
  console.log(e);
  console.log(obj[e]);
  console.log(Object.keys(obj[e]));

  two = Object.keys(obj[e]).map((ele) => {
    console.log(ele);
    return `${ele} - ${obj[e][ele]}`;
  });
  return two;
});
console.log(one);
console.log(two);

// let i = 0;
// let j = 0;

console.log(one.length);

let arr = [];

// while (i < one.length) {
//   if (j < one[i].length) {
//     console.log(one[i][j]);
//     arr.push(one[i][j]);
//     i++;

//     console.log(j);
//   }

// }
let k = 0;

console.log(one[0][0]);
console.log(one[1][0]);
console.log(one[2][0]);

// let length = one.length
// console.log(length)

// while (i < length) {}

function createRows(one, i, j, arr = []) {
  let fin = [];
  let length = one.length;
  while (i < length) {
    arr.push(one[i][j]);
    console.log(arr);
    i++;
  }
  console.log(arr);
  fin.push(arr);
  console.log(arr);
  return arr;
}

//this takes obj input and gets an array that represents a horizontal row
function modelRows(one) {
  let i = 0;
  let j = 0;
  let arr2 = [];
  while (j < one[i].length) {
    let curr = createRows(one, i, j);
    console.log(curr);
    // arr2.push(createRows(one, i, j));
    j++;
  }
  return arr2;
}

// console.log(modelRows(one));

let rowArray = modelRows(one);
console.log(rowArray);

// let htmlRowArray = rowArray.map((e) => {
//     console.log(e[1])
// })

let htmlRowArray = [];

console.log(rowArray[0][0]);

for (let i = 0; i < rowArray.length; i++) {
  let subArr = [];
  for (let j = 0; j < rowArray[i].length; j++) {
    console.log(rowArray[i][j]);
    subArr.push(rowArray[i][j]);
    break;
  }
  console.log(subArr);
  console.log(rowArray[0][1]);
  htmlRowArray.push(rowArray[0]);
}
console.log(htmlRowArray);

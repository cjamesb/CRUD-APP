/** @format */
import lodash from "lodash";
// import arr from "./test";
import React from "react";

let obj = {
  node2: {
    node0: 21,
    node1: 42,
  },
  node1: {
    node0: 13,
    node2: 42,
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
    return [ele, obj[e][ele]];
  });
  return two;
});
console.log(one);
console.log(two);

// let keys4 = Object.keys(obj);
// console.log(keys4);
// console.log(one.length);
// console.log(keys4.length == one.length);
// console.log(one[0]);
// let arr = [];
// let arr2 = [];
// for (let i = 0; i < keys4.length; i++) {
// arr.push(<th>{keys4[i]}</th>);
// arr2.push(<td>{[one[i][0], one[i][1]]}</td>);
// }

function createRows(one, i, j, arr = []) {
  let length = one.length;
  while (i < length) {
    arr.push(one[i][j]);
    i++;
  }
  return arr;
}

//this takes obj input and gets an array that represents a horizontal row
function modelRows(one) {
  let i = 0;
  let j = 0;
  let arr2 = [];
  while (j < one[i].length) {
    arr2.push(createRows(one, i, j));
    j++;
  }
  return arr2;
}

let rowArray = modelRows(one);
console.log(rowArray);

// let htmlRowArray = [];
// for(let )
let x = Object.keys(obj);
console.log(obj["node0"]);

export function Build() {
  return x.map((e) => {
    return (
      <tr>
        {Object.keys(obj[e]).map((ele) => {
          console.log("ele", ele);
          return <td>{obj[e][ele]}</td>;
        })}
      </tr>
    );
  });
}

// const { node0, node1 } = obj["node2"];
// console.log(node0, node1);

// let parents = Object.keys(obj);
// console.log(parents);
// let keys = Object.keys(obj["node2"]);

// console.log(keys);

// export function Newfunc(obj) {
//   let parents = Object.keys(obj);
//   let arr = [];
//   for (let j = 0; j < parents.length; j++) {
//     console.log(obj[parents[j]]);
//     let keys = Object.keys(obj[parents[j]]);
//     for (let i = 0; i < keys.length; i++) {
//       console.log(obj[keys[i]]);
//       //   console.log(obj["node2"]);
//       console.log(obj[parents[j]]);
//       console.log(parents[j]);
//       console.log(obj[keys[i]].hasOwnProperty(keys[i]));

//       if (obj["node2"].hasOwnProperty(keys[i])) {
//         console.log(keys[i]);
//         console.log(obj[parents[j]][keys[i]]);
//         console.log(obj[keys[i]]);
//         console.log(obj[keys[i]]);
//         // return `${keys[i]}  ${obj["node2"][keys[i]]}`;
//         arr.push(
//           <div>
//             <div>{`${parents[j]}`}</div>

//             <div>{`${obj[keys[i]]} - ${obj[parents[j][keys[i]]]}`}</div>
//           </div>
//         );
//       }
//     }
//   }
//   console.log("arr", arr);
//   return arr;
// }

// let arr2 = Newfunc(obj);
// console.log("arr2", arr2);
// let x = Object.keys(obj);

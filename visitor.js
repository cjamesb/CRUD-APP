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

let keys4 = Object.keys(obj);
// console.log(keys4);
// console.log(one.length);
// console.log(keys4.length == one.length);
console.log(one[0]);
let arr = [];
let arr2 = [];
for (let i = 0; i < keys4.length; i++) {
  arr.push(<th>{keys4[i]}</th>);
  arr2.push(<td>{one[i]}</td>);
}

console.log("arr", arr);

export function Build() {
  return (
    <div>
      <table>
        <thead>
          <>{arr}</>
        </thead>
        <tbody>
          <tr>{arr2}</tr>
        </tbody>
      </table>
    </div>
  );
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

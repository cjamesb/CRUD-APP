/** @format */
import { entries } from "lodash";
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

let parentArr = Object.keys(obj);
let childArr = [];
console.log(obj);
console.log(Object.keys(obj));
let map = Object.keys(obj).map((e, i) => {
  console.log(e);
  console.log(obj[e]);
  return Object.keys(obj[e]).map((ele, i) => {
    console.log(ele);
    console.log(obj[e][ele]);
    return [ele, obj[e][ele]];
  });
});

console.log(map);

let keys2;
let vals2;
let entriess;
let arr = [];
// len = Object.keys(obj)
// console.log(len)
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
  keys2 = Object.keys(obj[key]);
  vals2 = Object.values(obj[key]);
  entriess = Object.entries(obj[key]);
  let i = 0;
  // for(let i = 0; i<vals2.length; i++) {
  console.log(vals2);
  console.log(keys2);

  // }

  //   while (i < 3) {
  //     arr.push(
  //       <tr>
  //         <td>{`${key}`}</td>
  //         <td>{`${keys2[i]} - ${vals2[i]}`}</td>
  //       </tr>
  //     );
  //     i++;
  //   }
  // }
}
console.log(arr);

console.log(keys2);
console.log(vals2);
console.log(entriess);
// let arr = [<td>node5 = 56</td>, <td>node87 = 32</td>, <td>nodes9805 = 656</td>];

// export function Buildtwo() {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>node5</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>node1 - x</td>
//             <td>node4 - x</td>
//             <td>node7 - x</td>
//           </tr>
//           <tr>{arr}</tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

function normalizeData(obj) {
  let newObj = {};
  let objArr = [];
  for (let key in obj) {
    let i = 0;

    let curr;
    newObj.id = key;
    for (let key2 in obj[key]) {
      curr = `${key2} - ${obj[key][key2]}`;

      newObj[`child${i}`] = curr;
      i++;
    }

    objArr.push(newObj);
    newObj = {};
  }

  console.log(objArr);
  return objArr;
}

console.log(normalizeData(obj));

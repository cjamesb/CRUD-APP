/** @format */

import lodash, { keys, values } from "lodash";

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

console.log(obj.toJ);

export default obj;
let test = { ...obj };
console.log(test);

// for(let i = 0; i<obj.length; i++) {
//     let curr = obj[i]

//     for(let key in curr) {
//         console.log(key)
//         console.log(curr[key])
//         console.log(Array.from(obj))
//     }

// }

let parent = Object.keys(obj);
console.log(parent);

let key2 = Object.keys(obj[parent[0]]);

console.log(key2);

let valuesArray = [];
for (let i = 0; i < key2.length; i++) {
  console.log(obj[parent[0]][key2[i]]);
  valuesArray.push(obj[parent[0]][key2[i]]);
}
console.log(valuesArray);

let finArr = [key2, valuesArray];
console.log(finArr);

// let data = [obj].map((parent) => {
//     return (
//         <tr>
//             <td>{parent.id}</td>
//             <td>{parent.name}</td>
//         </tr>
//     )
// })

for (let i = 0; i < key2.length; i++) {}
let eleArr = [];
let x = [obj].map((ele) => {
  console.log(ele);
  return ele;
});

console.log(x);

function generateRows(obj) {
  let objectKeys = Object.keys(obj); //parent Keys
  console.log(objectKeys);

  for (let key of objectKeys) {
    console.log(key);

    let current = obj[key];
    console.log(current);

    for (let key2 in current) {
      //check object[key]
      console.log(current);
      let labeles = Object.keys(current);
      console.log(labeles);
      console.log(current[key2]);

      let value = current[key2];
    }
  }
}

console.log(generateRows(obj));

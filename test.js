/** @format */

import lodash from "lodash";

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
// export default obj;

let x = [obj];
console.log(x);

let arr = [];

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);

  for (let key2 in obj[key]) {
    console.log(key2);
    let distance = obj[key][key2];
    console.log(distance);
    console.log(key2);
    console.log(obj[key][key2]);

    arr.push({
      key: key,
      child: {
        key: `${key2} - ${distance}`,
        name: `${key2}`,
        distance: distance,
      },
    });
  }
}

export default arr;

console.log(arr);

// console.print(lodash.sortBy(arr, ['child.key', 'child.name']));
console.log(arr[0]["key"]);
console.log(arr[0]["child"]);
console.log(arr[0]["child"]["distance"]);

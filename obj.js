/** @format */

let obj = {
  node2: {
    node0: 21,
    node1: 42,
  },
  //   node1: {
  //     node0: 13,
  //     node2: 42,
  //   },
  //   node0: {
  //     node2: 21,
  //     node1: 13,
  //   },
};

export default obj;

// let x = Object.entries(obj)

// console.log(x)

// let y = (x.map((e) => {
//    return e
// }))

// console.log(y[0])
let arr = [];
for (let sortKey in obj) {
  if (obj[sortKey]) {
    let curr = obj[sortKey];
    arr.push(curr);
  }
  if (obj.hasOwnProperty(sortKey)) {
    console.log(sortKey);
  }
}

const test2 = (obj) => {};

console.log(test2(obj));

Object.keys(obj).forEach(function (key) {
  console.log(key, obj[key]);
  console.log({ [key]: obj[key] });
});

console.log(obj["node2"]);
for (let keydos in obj["node2"]) {
  console.log(keydos);

  arr.push(keydos);
  console.log(arr);
}
console.log(arr);

// obj[sortKey] =
//{
//     "node2": 21,
//     "node1": 13
// }

console.log(Object.keys(obj["node2"]));
let keysss = Object.keys(obj["node2"]);

for (let key of keysss) {
  console.log(key);
  console.log(obj["node2"]);
  if (obj["node2"][key]) {
    console.log(obj["node2"][key]);
    console.log({ key: `${key} --- ${obj["node2"][key]}` });
  }
}
obj;

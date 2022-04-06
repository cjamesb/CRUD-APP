/** @format */

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

function test(obj, sortKey) {
  let x = obj[sortKey];
  console.log(x);
  let entries = Object.entries(x);
  console.log(entries);
  return entries;
}

let sortKey = "node2";

console.log(test(obj, sortKey));

let x = obj[sortKey];

console.log(Object.entries(x));

let y = Object.entries(x);
console.log(y);

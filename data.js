/** @format */

import { json } from "express";

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
console.log(JSON.parse(obj));

console.log(JSON.stringify(obj));

let obj2 = JSON.stringify(obj);

// let json = JSON.stringify(eval('(' + obj + ')'));
// console.log(json)

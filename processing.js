/** @format */

import lodash from "lodash";
import React, { useCallback, useState } from "react";

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

export function processHeaders(obj) {
  let headers = Object.keys(obj);
  console.log(headers);
  return headers;
}

export function processNodes(obj) {
  let x = [];
  for (let key in obj) {
    // console.log(key);

    // console.log(obj[key]);

    if (typeof obj[key] === "object") {
      let newObj = {};
      newObj.key = key;
      newObj.child = [];
      //   console.log(newObj);
      for (let key2 in obj[key]) {
        // console.log(key2);
        // console.log(obj[key][key2]);

        newObj.child.push(`${key2} - ${obj[key][key2]}`);
        // console.log(newObj);
        // console.log(newObj.hasOwnProperty(key));
        // if(newObj.hasOwnProperty(key))
        // console.log(newObj);
      }
      x.push(newObj);
    }
  }
  console.log(x);
  return x;
}

console.log(processHeaders(obj));

console.log(processNodes(obj));

let proccessedNodes = processNodes(obj);
console.log(proccessedNodes);

let proccessedHeaders = processHeaders(obj);
console.log(proccessedHeaders);

const processNode = (obj, currentNode) => {
  console.log(obj);
  let x;
  if (obj[0].key == currentNode) {
    console.log(obj[0].child);
    x = obj[0].child;
  }
  return x;
};

let test2 = processNode(proccessedNodes, "node2");
console.log(test2);

//proccessedNodes =
// [ { key: 'node2', child: [ 'node0 - 21', 'node1 - 42' ] },
//   { key: 'node1', child: [ 'node0 - 13', 'node2 - 42' ] },
//   { key: 'node0', child: [ 'node2 - 21', 'node1 - 13' ] } ]

console.log(proccessedNodes[0]);

// let test = proccessedNodes.map((e) => {
//   console.log(e.child);
//   return e.child.map((x) => {
//     console.log(x);
//     return x;
//   });
// });

console.log(test);

let test4 = Object.keys(obj);
console.log(test4);

let test5 = obj[test4[0]];
console.log(test5);

// console.log(lodash.map(test5))
console.log(lodash.mapValues(test5));

console.log(Object.values(obj));

function test(obj, sortKey) {
  let x = obj[sortKey];
  console.log(x);
  let entries = Object.entries(x);
  console.log(entries);
  return entries;
}
let sortKey = ["node0"];
let arr = test(obj, sortKey);
console.log(arr);

export const MakeTable = ({ data }) => {
  return (
    <div>
      <h1>table</h1>
      <table>
        <thead>
          <tr>
            {proccessedHeaders.map((row, i) => {
              return <td key={i}>{row}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {arr.map((e) => {
            return (
              <tr>
                <td>{`${e[0]} ${e[1]}`}</td>
                {console.log("arr[e]", e)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

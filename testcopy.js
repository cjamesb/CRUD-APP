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

console.log(obj);

console.log([obj["node2"]]);
console.log(obj["node2"]);
console.log(obj.node2.node0);
console.log(obj["node2"]["node0"]);

lodash.sortBy(obj["node2"], [
  (o) => {
    console.log(o);
  },
]);

//recursive fuctnion to build children array
function buildChildArray(obj, keysArray, childArray, finalArray = []) {
  for (let key of keysArray) {
    console.log(key);
    let children = getChildren(obj[key], key);
    console.log(children);
    // let parentObj = {
    //   name: key,
    //   key: `${key} + ${key}`,
    //   childArray: children,
    // };
    // console.log(parentObj);
    finalArray.push({ id: key, name: key, children });
  }
  console.log(finalArray);
  return finalArray;
}

function getChildren(parentNode, parentNodeName, childArray = []) {
  console.log(parentNode);
  console.log(parentNodeName);
  for (let childKey in parentNode) {
    console.log(childKey);
    console.log(parentNode[childKey]);
    let distance = parentNode[childKey];
    console.log(distance);
    let newChildObj = {
      name: `${childKey}`,
      key: `${childKey} - ${distance}`,

      distance: distance,
    };

    console.log(newChildObj);
    childArray.push(newChildObj);
    console.log(childArray);
  }

  return childArray;
}

function getKeys(obj) {
  let arr = Object.keys(obj);
  console.log(arr);
  return arr;
}

console.log(getKeys(obj));
console.log(getChildren(obj["node0"], "node0"));

let keys = getKeys(obj);

let exportObj = buildChildArray(obj, keys);
console.log(exportObj);

export default exportObj;
// let len = exportObj.length

// function sortStuff() {
//   let y = { ...exportObj };
//   console.log(y);
//   console.log();
//   let x;
//   for (let i = 0; i < exportObj.length; i++) {
//     // console.log(y[i]["childArray"]);
//     x = y[i]["childArray"].sort((a, b) => {
//       console.log(a, b);
//       console.log(a["distance"]);
//       console.log(b["distance"]);
//       return a.distance > b.distance ? 1 : -1;
//     });
//     console.log(x);
//   }
// }

// console.log(sortStuff());

console.log("exportObj", exportObj);

console.log(exportObj);

let { id } = exportObj[0];
console.log(id);

let test5 = exportObj.reduce((a, v) => ({ ...a, [v]: v }), {});

console.log("test5", test5);

// Object.keys(obj).map((ele) => {
//   console.log(ele);

//   console.log(obj[ele]);
//   let arr2 = [];
//   Object.keys(obj[ele]).map((e) => {
//     console.log(e);
//     console.log(obj[ele][e]);
//     arr2.push(`${e} - ${obj[ele][e]}`);
//   });
//   arr.push(arr2);
//   return arr;
// });
// console.log(arr);

// let y = obj.map((ele) => {
//   console.log(ele);
//   console.log(obj[ele]);
// });

// console.log(x);
// console.log(y);
let x;
let arr = [];
let y = Object.keys(obj).map((ele) => {
  console.log(ele);

  console.log(obj[ele]);

  return Object.keys(obj[ele]).map((e, i) => {
    console.log(e);
    console.log(obj[ele][e]);
    arr.push("<h2 key={i}>{obj[ele][e]}</h2>");
    return e;
  });
});

console.log(y);
console.log(x);
console.log(arr);

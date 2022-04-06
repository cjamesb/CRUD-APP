/** @format */

import lodash from "lodash";

let obj = {
  node0: [
    {
      node2: 21,
    },
    {
      node1: 13,
    },
  ],
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

    let ds = {
      outerName: key,
      children: [
        {
          key: `${key2} - ${distance}`,
          name: `${key2}`,
          distance: distance,
        },
      ],
    };
    console.log(ds);
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

//i actually want to push all children of a node to child array

let test = lodash.sortBy(arr, ["child"]);

console.log(test);

let finArr = [];
let cache = {};
for (let i = 0; i < test.length; i++) {
  //name of parentNode
  let parentNodeName = test[i].key;
  console.log(test[i].key);

  //name of child node
  let childNodeName = test[i].child.name;
  console.log(test[i].child.name);

  //distance variable
  let distance = test[i].child.distance;
  console.log(test[i].child.distance);

  console.log(parentNodeName);

  if (cache[test[i].key] === undefined) {
    let newObj = {
      key: parentNodeName,
      child: {
        key: `${childNodeName} - ${distance}`,
        name: `${childNodeName}`,
        distance: distance,
      },
    };
    console.log(newObj);

    //track that node already exsists as an obj
    cache[parentNodeName] = true;
    //push new object to array
    finArr.push(newObj);
    console.log(cache);
    console.log(finArr);
  } else {
    let childObj = {
      key: `${childNodeName} - ${distance}`,
      name: `${childNodeName}`,
      distance: distance,
    };
  }
}

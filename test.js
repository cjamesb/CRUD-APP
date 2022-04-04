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
export default obj;

console.log(obj);

for (let key in obj) {
  // console.log(key);
  // console.log(obj[key]);
  let keysToCheck = Object.keys(obj[key]);
  console.log(keysToCheck);

  keysToCheck.sort((a, b) => {
    return obj[key][a] > obj[key][b] ? 1 : -1;
  });
  console.log(keysToCheck);
  console.log(keysToCheck);
}

//it is checking and moving keys now

// console.log(obj);

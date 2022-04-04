/** @format */

let nodes = {
  node0: {
    node2: 21,
    node1: 13,
  },
  node1: {
    node0: 13,
    node2: 42,
  },
  node2: {
    node0: 21,
    node1: 42,
  },
};

export default nodes;

console.log(nodes.sort((a, b) => a - b));

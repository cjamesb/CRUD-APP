/** @format */

[
  {
    name: "node0",
    key: "node0 + node0",
    childArray: [
      {
        name: "node2",
        key: "node2 - 21",
        distance: 21,
      },
      {
        name: "node1",
        key: "node1 - 13",
        distance: 13,
      },
    ],
  },
  {
    name: "node1",
    key: "node1 + node1",
    childArray: [
      {
        name: "node0",
        key: "node0 - 13",
        distance: 13,
      },
      {
        name: "node2",
        key: "node2 - 42",
        distance: 42,
      },
    ],
  },
  {
    name: "node2",
    key: "node2 + node2",
    childArray: [
      {
        name: "node0",
        key: "node0 - 21",
        distance: 21,
      },
      {
        name: "node1",
        key: "node1 - 42",
        distance: 42,
      },
    ],
  },
];

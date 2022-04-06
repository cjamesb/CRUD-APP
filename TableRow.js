/** @format */

import React from "react";

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
let test = Object.values(obj);
let keys = Object.keys(obj);
console.log(test);
console.log(keys);
let objkeys = Object.keys(obj[keys]);
console.log(objkeys);
export const TableCell = (props) => {
  return (
    <tr>
      <td>node2</td>
      <td>node0 - 21</td>
      <td>node1 - 42</td>
    </tr>
  );
};

// export const TableRow = (props) => {
//   return (
//     <div>
//       <h1>test table</h1>
//       <table>
//         <thead>
//           <tr>ParentNode</tr>
//         </thead>
//         <tbody>
//           <TableCell></TableCell>
//         </tbody>
//       </table>
//     </div>
//   );
// };

/** @format */

import React from "react";

// import * as data from "../data.json";
// import * as data2 from "../data2.json";
// console.log("data,data,data", data);
// console.log("data2,dtat2", data2);
// import obj from "../test";

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

console.log(obj);

let data;
console.log(data);

// export const JsonDisplay = () => {
//   const DisplayData = obj((parent) => {
//     return (
//       <tr>
//         <td>{parent.id}</td>
//         <td>{parent.name}</td>
//         <td>{parent.city}</td>
//       </tr>
//     );
//   });
//   console.log(DisplayData);
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>test words</th>
//             <th>test Words2</th>
//             <th>test words3</th>
//           </tr>
//         </thead>
//         <tbody>{DisplayData}</tbody>
//       </table>
//     </div>
//   );
// };
let arr = [];
Object.keys(obj).map((ele) => {
  console.log(ele);

  console.log(obj[ele]);

  Object.keys(obj[ele]).map((e) => {
    console.log(e);
    arr.push(e);
  });

  return arr;
});
console.log(arr);

let y = [obj].map((ele) => {
  console.log(ele);
  console.log(obj[ele]);
});

// console.log(x);
// console.log(y);

const JsonDisplay = () => {
  return (
    <div>
      <h1>tables</h1>
      <table>
        <tbody>
          {Object.keys(obj).map((ele) => {
            {
              return Object.keys(obj[ele]).map((x, i) => {
                console.log("xxxxx", x);
                return (
                  <tr key={i}>
                    <td>{`${x} - ${obj[ele][x]}`}</td>
                  </tr>
                );
              });
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JsonDisplay;

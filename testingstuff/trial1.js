/** @format */

import React, { useState } from "react";
import data from "./data.json";
import data2 from "./data2.json";

let parent = [];
data2.forEach((e) => {
  console.log("ee", e);
  parent.push(e.child);
});

console.log("parent", parent);

for (let index in data2) {
  console.log("key", index);
  console.log("data2[index]", data2[index]);
}

const Trial = () => {
  const [contacts, setContacts] = useState(data2);

  //   return (
  //     <div>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>name</th>
  //             <th>adress</th>
  //             <th>phoneNumber</th>
  //             <th>email</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {contacts.map((contact, i) => {
  //             console.log("contacts", contacts);
  //             contacts[i].child.map((e) => {
  //               return (
  //                 <tr>
  //                   <td>{e.id}</td>
  //                   <td>{e.value}</td>
  //                 </tr>
  //               );
  //             });
  //           })}

  //           {/* <td>{contact.child[i].id}</td>
  //               <td>{contact.phoneNumber}</td>
  //               <td>{contact.email}</td> */}
  //         </tbody>
  //       </table>
  //     </div>
  //   );

  //   return (
  //     <table>
  //       <tr>
  //         <th>Month</th>
  //         <th>savings</th>
  //       </tr>
  //       <tr>
  //         <td>jan</td>
  //         <td>$1000</td>
  //       </tr>
  //       <tr>
  //         <td>feb</td>
  //         <td>$80</td>
  //       </tr>
  //     </table>
  //   );
  // };

  return (
    <table>
      <tbody>
        <tr>
          <th>node-x</th>
        </tr>
        <tr>
          <td>node7 - 13</td>
        </tr>
        <tr>
          <td>node76 - 5</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Trial;

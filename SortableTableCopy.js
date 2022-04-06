/** @format */

import React, { useCallback, useState } from "react";
// import obj from "../test";
// console.log(obj);
// import arr from "../test";
import exportObj from "./testcopy.js";
console.log("exportObj", exportObj);
let obj = exportObj;
console.log("obj", obj);

const sortData = ({ tableData, sortKey, reverse }) => {
  if (!sortKey) return tableData;
  console.log("sortKey", sortKey);

  let spreadObj = { ...obj };
  console.log("x-tableData", spreadObj);

  let y;
  // console.log("data[sortKey]", obj[sortKey]);
  // console.log("SpreadObj", spreadObj[sortKey]);
  let sortedData = obj.sort((a, b) => {
    console.log("a[sortKey]", a[sortKey]);
    console.log("a", a);

    // a.children.map((e) => {
    //   console.log("eeee", e);
    //   return e.name;
    // });

    // console.log("a[sortkey][childArray]", a[sortkey]["childArray"]);

    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
};

//have asc and desc order
const getHeaders = (obj) => {
  let headers = [];
  let len = obj.length;
  for (let i = 0; i < len; i++) {
    headers.push({ key: `${obj[i]["id"]}`, name: `${obj[i]["id"]}` });
  }
  return headers;
};

const SortButton = ({ sortOrder, columnKey, sortKey, onClick }) => {
  return <button onClick={onClick}>button</button>;
};

const generateDisplayData = ({ sortedData }) => {
  const displayData = [];
  for (let i = 0; i < sortedData; i++) {
    for (let j = 0; j < sortedData[i]; j++) {
      console.log("sortedData[i]", sortedData()[i]);
      console.log("sortedData[i][j]", sortedData()[i][j]);
      displayData.push(sortedData()[i][j]);
      console.log("displayData1", displayData);
    }
  }
  return displayData;
};

const SortableTable = ({ data }) => {
  const [sortKey, setSortKey] = useState("node2");
  const [sortOrder, setSortOrder] = useState("asc");

  const headers = getHeaders(obj);
  console.log("new headers", headers);

  const sortedData = useCallback(
    () => sortData({ tableData: obj, sortKey, reverse: sortOrder === "des" }),
    [data, sortKey, sortOrder]
  );
  let testData = sortedData();
  console.log("testData", testData);

  let newTestData = generateDisplayData(testData);
  console.log("newTestData", newTestData);

  console.log("sortedData", sortedData());
  console.log("displayData", generateDisplayData(sortedData(obj)));
  console.log("sortedData[i]", sortedData()[0]);
  // console.log("sortedData[i][j]", sortedData[0][0]);

  function changeSort(key) {
    if (sortOrder === "asc") {
      setSortOrder("des");
    } else {
      setSortOrder("asc");
    }
    setSortKey(key);
  }

  // sortedData.map((e) => {
  //   e.children.map((ele) => {

  //   })
  // })

  return (
    <div>
      <h1>table</h1>
      <table>
        <thead>
          <tr>
            {headers.map((row) => {
              return (
                <td key={row.key}>
                  {row.name}
                  <SortButton
                    columnKey={row.key}
                    onClick={() => {
                      changeSort(row.key);
                    }}
                    sortOrder={sortOrder}
                    sortKey={sortKey}
                  />
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {sortedData().map((node, i) => {
            console.log("nodenode", node);
            return node.children.map((e) => {
              console.log("e", e);
              return (
                <tr>
                  <td key={e.key}>{e.key}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;

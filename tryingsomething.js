/** @format */

import React, { useCallback, useState } from "react";
// import obj from "../test";
// console.log(obj);
// import arr from "../test";
import exportObj from "./testcopy.js";
console.log("exportObj", exportObj);
let obj = exportObj;

const sortData = ({ tableData: obj, sortKey, reverse }) => {
  if (!sortKey) return obj;
  console.log("sortKey", sortKey);

  let spreadObj = { ...obj };
  console.log("x-tableData", spreadObj);

  let y;
  let sortedData = obj.sort((a, b) => {
    console.log("a[sortKey]", a[sortKey]);
    console.log("a", a);

    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
};

const getHeaders = ({ obj }) => {
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

const generateDisplayData = (sortedData, displayData = []) => {
  for (let i = 0; i < sortedData; i++) {
    for (let j = 0; j < sortedData()[i]; j++) {
      console.log("sortedData[i]", sortedData()[i]);
      console.log("sortedData[i][j]", sortedData()[i][j]);
      displayData.push(sortedData[i][j]);
      console.log("displayData1", displayData);
    }
  }
  return displayData;
};

console.log(generateDisplayData);

function SortableTable({ data }) {
  const [sortKey, setSortKey] = useState("node2");
  const [sortOrder, setSortOrder] = useState("asc");

  const headers = getHeaders(obj);
  console.log("new headers", headers);

  let dataThatIsSorted = sortedData();
  console.log("dataThatIsSorted", dataThatIsSorted);

  const sortedData = useCallback(
    () => sortData({ tableData: obj, sortKey, reverse: sortOrder === "des" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key) {
    if (sortOrder === "asc") {
      setSortOrder("des");
    } else {
      setSortOrder("asc");
    }
    setSortKey(key);
  }
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
          {sortedData().map((node) => {
            return (
              <tr key={`${node.id}`}>
                <td>{`${node}, ${node}`}</td>
                {/* <td>{node.parentNode}</td>
                <td>{node.childNode}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

console.log("sortDatafdklsf", sortData());

export default SortableTable;

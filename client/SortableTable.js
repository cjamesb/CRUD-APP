/** @format */

import React, { useCallback, useState } from "react";
import obj from "../test";
console.log(obj);

// let data = obj;
let finalKey = Object.keys(obj);
console.log("finalKey", finalKey);

const sortData = ({ tableData, sortKey, reverse }) => {
  if (!sortKey) return tableData;
  let sortedData;

  for (let key in obj) {
    let keysToCheck = Object.keys(obj[key]);
    // finalKey = key;
    console.log("key", key);
    sortedData = keysToCheck.sort((a, b) => {
      return obj[key][a] > obj[key][b] ? 1 : -1;
    });
  }
  console.log(finalKey);
  // const sortedData = obj.sort((a, b) => {
  //   return a[sortKey] > b[sortKey] ? 1 : -1;
  // });

  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
};

function handleClick(e) {
  e.preventDefault();
  console.log("clicked");
}

const SortButton = ({ sortOrder, columnKey, sortKey, onClick }) => {
  return <button onClick={onClick}>button</button>;
};

const SortableTable = ({ data }) => {
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  //have asc and desc order

  const headers = [
    { key: "id", label: "ID" },
    { key: "parentNode", label: "Parent Node" },
    { key: "childNode", label: "Child Node" },
  ];

  let headers2 = [];
  let j = 200;
  for (let i = 0; i < finalKey.length; i++, j++) {
    headers2.push({ key: `${finalKey[i]} + ${j}`, label: finalKey[i] });
  }

  console.log(headers2);

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "des" }),
    [data, sortKey, sortOrder]
  );

  console.log("sortedData", sortedData());

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
            {headers2.map((row) => {
              return (
                <td key={row.key}>
                  {row.label}
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
          {console.log(sortedData())}
          {sortedData().map((node) => {
            return (
              <tr key={node}>
                <td>{node}</td>
                {/* <td>{node.parentNode}</td>
                <td>{node.childNode}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;

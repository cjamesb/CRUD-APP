/** @format */
import nodes from "../nodes.js";
import React, { useCallback, useState } from "react";
import obj from "../test";
console.log(obj);

// let data = obj;

const sortData = ({ tableData, sortKey, reverse }) => {
  if (!sortKey) return tableData;
  const sortedData = obj.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

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

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "des" }),
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
                  {row.label}{" "}
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
              <tr key={node.id}>
                <td>{node.id}</td>
                <td>{node.parentNode}</td>
                <td>{node.childNode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;

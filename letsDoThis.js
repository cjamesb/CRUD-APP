/** @format */

import React, { useCallback, useState } from "react";
// import obj from "./obj";
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

const sortData = ({ tableData, sortKey, reverse }) => {
  if (!sortKey) {
    console.log("no sort key");
    return tableData;
  }

  console.log("sortKey", sortKey);
  console.log("obj[sortKey]", obj[sortKey]);

  console.log("Object.keys(obj)", Object.keys(obj[sortKey]));

  //   let data = Object.entries(obj);
  //   console.log("data", data);
  let sortedData = Object.entries(obj).sort((a, b) => {
    console.log("a[sortKey]", a[sortKey]);
    console.log("a", a);

    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  console.log("a[sortkey][childArray]2", sortedData);

  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
};

const SortButton = ({ sortOrder, columnKey, sortKey, onClick }) => {
  return <button onClick={onClick}>button</button>;
};

const SortableTable = ({ data }) => {
  const [sortKey, setSortKey] = useState("node0");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedData = useCallback(
    () => sortData({ tableData: obj, sortKey, reverse: sortOrder === "des" }),
    [obj, sortKey, sortOrder]
  );

  let headers = Object.keys(obj);

  function changeSort(key) {
    if (sortOrder === "asc") {
      setSortOrder("des");
    } else {
      setSortOrder("asc");
    }
    setSortKey(key);
  }

  function getChildren(obj, sortKey) {
    let x = obj[sortKey];
    console.log(x);
    let entries = Object.entries(x);
    console.log(entries);
    return entries;
  }
  return (
    <div>
      <h1>new Table</h1>

      <table>
        <thead>
          <tr>
            {headers.map((row, i) => {
              return (
                <td key={i}>
                  {row}
                  <SortButton
                    columnKey={row}
                    onClick={() => {
                      changeSort(row.key);
                    }}
                    sortOrder={sortOrder}
                    sortKey={sortKey}
                  />
                  {console.log("sortKey5", sortKey)}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {console.log("sortedData", sortedData())}
          {/* {console.log("sortedData in function", Object.entries(sortedData()))} */}
          {sortedData().map((e) => {
            console.log(e);
            console.log("e[1]", e[1]);
            // return e;
            console.log(Object.entries(e[1]));
            return Object.entries(e[1]).map((ele, i) => {
              {
                console.log("ele", ele);
              }
              return (
                <tr key={i}>
                  <td>{ele}</td>
                </tr>
              );
            });
          })}
          {}
          {/* {getChildren(obj, sortKey).map((e) => {
            return (
              <tr key={e}>
                <td>{`${e[0]} ${e[1]}`}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;

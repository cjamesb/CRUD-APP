/** @format */

import React from "react";
import { useTable, useSortBy } from "react-table";
import { normalizeData, normalizeHeader } from "../scratch.js";

let obj = {
  node3: {
    node1: 75,
    node9: 79,
    node8: 22,
  },
  node4: {
    node0: 93,
    node9: 68,
    node8: 36,
    node7: 98,
  },
  node9: {
    node2: 45,
    node3: 79,
    node4: 68,
    node7: 31,
    node5: 62,
    node6: 49,
    node1: 71,
  },
  node1: {
    node8: 63,
    node3: 75,
    node7: 19,
    node9: 71,
  },
  node5: {
    node0: 32,
    node2: 18,
    node7: 37,
    node8: 90,
    node9: 62,
  },
  node8: {
    node0: 77,
    node1: 63,
    node4: 36,
    node5: 90,
    node7: 39,
    node2: 46,
    node6: 54,
    node3: 22,
  },
  node2: {
    node5: 18,
    node9: 45,
    node8: 46,
  },
  node0: {
    node5: 32,
    node8: 77,
    node4: 93,
  },
  node6: {
    node7: 12,
    node8: 54,
    node9: 49,
  },
  node7: {
    node5: 37,
    node8: 39,
    node1: 19,
    node6: 12,
    node4: 98,
    node9: 31,
  },
};

const [normalizedData, maxChildren] = normalizeData(obj);
console.log("normalizeData", normalizeData);

const normalizedHeaders = normalizeHeader(maxChildren);
console.log(normalizedHeaders);

export const ReactTable = () => {
  const data = React.useMemo(() => normalizedData, []);

  //   const columns = React.useMemo(() => {
  //     columns: [
  //       {
  //         Header: "Name",
  //         accessor: "name",
  //       },
  //       {
  //         Header: "Address",
  //         accessor: "address",
  //       },

  //       {
  //         Header: "Date",
  //         accessor: "date",
  //       },
  //       {
  //         Header: "Order #",
  //         accessor: "order",
  //       },
  //     ];
  //   }, []);

  const columns = React.useMemo(() => normalizedHeaders, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  //   return (
  //     <table {...getTableProps()}>
  //       <thead>
  //         {headerGroups.map((headerGroup) => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map((col) => (
  //               <th {...col.getHeaderProps()}>{col.render("header")}</th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //     </table>
  //   );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "asc" : "des") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

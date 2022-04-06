/** @format */

import React from "react";
import { useTable, useSortBy } from "react-table";
import { normalizeData, normalizeHeader } from "../scratch.js";

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

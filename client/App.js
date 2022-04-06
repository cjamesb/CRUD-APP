/** @format */

import React from "react";
// import SortableTable from "./SortableTable";
import JsonDisplay from "./display.js";
// import { MakeTable } from "../processing";
import SortableTable from "../letsDoThis.js";
import Trial from "../testingstuff/trial1";
import { Build } from "../visitor.js";
import { Buildtwo } from "../scratch.js";
import { TableRow } from "../TableRow.js";
import { ReactTable } from "../react-table/reactTable.js";

const App = () => {
  return (
    <div>
      <div>
        <h1>hello</h1>
        {/* <TableRow></TableRow> */}
        {/* <ReactTable></ReactTable> */}
        {/* <Newfunc /> */}
        <Build></Build>
        {/* <Buildtwo /> */}
        {/* {<Trial></Trial>} */}
        {/* <JsonDisplay /> */}
        {/* <SortableTable></SortableTable> */}
        {/* <MakeTable></MakeTable> */}
      </div>
    </div>
  );
};

export default App;

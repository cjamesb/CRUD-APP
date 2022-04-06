/** @format */

import React from "react";
// import SortableTable from "./SortableTable";
import JsonDisplay from "./display.js";
// import { MakeTable } from "../processing";
import SortableTable from "../letsDoThis.js";
import Trial from "../testingstuff/trial1";
import { Build } from "../visitor.js";

const App = () => {
  return (
    <div>
      <div>
        <h1>hello</h1>
        {/* <Newfunc /> */}
        <Build></Build>
        {/* {<Trial></Trial>} */}
        {/* <JsonDisplay /> */}
        {/* <SortableTable></SortableTable> */}
        {/* <MakeTable></MakeTable> */}
      </div>
    </div>
  );
};

export default App;

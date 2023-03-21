// Parent component
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [data, setData] = useState("");

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child component: {data}</p>
      <ChildComponent onData={(childData) => setData(childData)} />
    </div>
  );
}

export default ParentComponent;
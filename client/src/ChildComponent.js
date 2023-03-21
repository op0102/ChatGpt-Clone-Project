import React, { useState } from "react";

function ChildComponent(props) {
  const [childData, setChildData] = useState("");

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={childData}
        onChange={(event) => {
          const value = event.target.value;
          setChildData(value);
          props.onData(value);
        }}
      />
    </div>
  );
}

export default ChildComponent;
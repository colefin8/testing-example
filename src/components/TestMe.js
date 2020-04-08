import React from "react";

const TestMe = (props) => {
  return (
    <div
      style={{
        margin: "300px auto",
        height: "300px",
        width: "300px",
        border: "1px solid black",
        backgroundColor: "white",
        color: "black",
        fontSize: '48px'
      }}
    >
      {props.name}
    </div>
  );
};

export default TestMe;

import React from "react";

function Greeting({ name, age }) {
  return (
    <div
      style={{
        fontFamily: "monospace",
      }}
    >
      <p
        style={{
          padding: "10px 15px",
          color: "#004d3d",
          fontSize: "1.5rem",
          border: "1px solid  #6666",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        Good Morning <strong>{name}</strong> your age is <strong>{age}</strong>.
      </p>
    </div>
  );
}

export default Greeting;

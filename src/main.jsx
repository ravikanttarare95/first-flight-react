import { createRoot } from "react-dom/client";
import Button, { ButtonHello, ButtonGoodNight } from "./Button.jsx";
import "./Button.css";

const root = createRoot(document.getElementById("root"));

function Greeting({ name, age }) {
  return (
    <div
      style={{
        fontFamily: "monospace",
      }}
    >
      <p style={{ padding: "10px", color: "#004d3d", fontSize: "1.5rem",border:"1px solid  #6666", borderRadius:"10px", backgroundColor:"#d6f5f5"}}>
        Good Morning <strong>{name}</strong> your age is <strong>{age}</strong>.
      </p>
    </div>
  );
}

root.render(
  <>
    <h1
      style={{
        color: "#003329",
        fontSize: "3rem",
        margin: "20px auto",
        fontFamily: "monospace",
      }}
    >
      First Flight
    </h1>
    <div style={{ backgroundColor: "#ebfafa", padding: "20px" }}>
      <Greeting name="Ravikant" age="23" />
      <hr />
      <Button title="Button" />
      <ButtonHello title="Hello" />
      <ButtonGoodNight title="Good Night" />
      <hr />
      <Greeting name="Bhushan" age="22" />
      <Greeting name="Sharad" age="23" />
      <Greeting name="Shrikant" age="28" />
      <Greeting name="Hemant" age="29" />
    </div>
  </>
);

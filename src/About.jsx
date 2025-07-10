import Navbar from "./Navbar.jsx";
import Greeting from "./Components/Greeting.jsx";

function About() {
  return (
    <>
      <Navbar />
      <h1
        style={{
          color: "#003329",
          fontSize: "3rem",
          margin: "20px auto",
          fontFamily: "monospace",
        }}
      >
        First Flight About Page
      </h1>
      <div style={{ backgroundColor: "#e6ffff", padding: "20px" }}>
        <Greeting name="Ravikant" age="23" />

        <Greeting name="Bhushan" age="22" />
        <Greeting name="Sharad" age="23" />
        <Greeting name="Shrikant" age="28" />
        <Greeting name="Hemant" age="29" />
      </div>
    </>
  );
}

export default About;

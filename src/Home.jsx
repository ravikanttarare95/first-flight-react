import Navbar from "./Navbar.jsx";
import Button from "./Button.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <>
        <h1
          style={{
            color: "#003329",
            fontSize: "3rem",
            margin: "20px auto",
            fontFamily: "monospace",
          }}
        >
          First Flight Home Page
        </h1>
        <hr />
        <Button title="Button" />
        <Button title="Hello" variant={"primary"} />
        <Button title="Good Night" variant={"secondary"} />
        <hr />
      </>

      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "lightgreen",
            borderRadius: "50%",
            position: "absolute",
            right: "62%",
            top: "30%",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "yellow",
            borderRadius: "50%",
            position: "absolute",
            right: "33%",
            top: "50%",
          }}
        ></div>
        <div
          style={{
            background: "rgba(77, 184, 255,0.3)",
            width: "400px",
            color: "#ff3399",
            fontSize: "30px",
            fontWeight: "bold",
            padding: "20px",
            borderRadius: "20px",
            height: "200px",
            margin: "40px auto",
            "backdrop-filter": "blur(10px)",
          }}
        >
          knnlknl
        </div>
      </div>
    </>
  );
}

export default Home;

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
    </>
  );
}

export default Home;

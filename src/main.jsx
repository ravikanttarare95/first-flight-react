import { createRoot } from "react-dom/client";
import "./Button.css";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";

const root = createRoot(document.getElementById("root"));

const path = window.location.pathname;
if (path === "/") {
  root.render(<Home />);
} else if (path === "/about") {
  root.render(<About />);
} else if (path === "/contact") {
  root.render(<Contact />);
} else {
  root.render(
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
}

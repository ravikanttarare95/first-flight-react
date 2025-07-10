import { useState } from "react";
function Button({ title, variant, handleClick }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // If we declare the state vaable and function inside the button component then the button components we use time will remember its own state (value of state variable)
  return (
    <button className={`btn btn-${variant}`} onClick={handleClick}>
      {title} {count}
    </button>
  );
}

export default Button;

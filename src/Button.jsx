function Button({ title }) {
  return <button className="btn">{title}</button>;
}

function ButtonHello({ title }) {
  return <button className="btn btn-hello">{title}</button>;
}

function ButtonGoodNight({ title }) {
  return <button className="btn btn-good-night">{title}</button>;
}

export { ButtonHello, ButtonGoodNight };
export default Button;

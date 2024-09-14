import "./Button.CSS";
/*
const DangerButton = () => {
  return <button className="red-button">Delete</button>;
};
export default DangerButton;
*/

export function DangerButton() {
  return <button className="red-button">Delete</button>;
}

export function SuccessButton() {
  return <button className="green-button">Save</button>;
}


// red, green, and blue button deffine
/*
const Button = (props) => {
  if (props.type === "success") {
    return <button className="green-button">props.btxText</button>;
  } else if (props.type === "danger") {
    return <button className="red-button">props.btxText</button>;
  } else {
    return <button className="blue-button">props.btxText</button>;
  }
};
*/

/*
const Button = ({ btnType, btnText }) => {
  if (btnType === "success") {
    return <button className="green-button">{btnText}</button>;
  } else if (btnType === "danger") {
    return <button className="red-button">{btnText}</button>;
  } else {
    return <button className="blue-button">{btnText}</button>;
  }
};
*/

const Button = ({ btnType, btnText, handler }) => {

  if (btnType === "success") {
    return <button className="btn btn-success" onClick={handler}>{btnText}</button>;

  } else if (btnType === "danger") {
    return <button className="btn btn-danger" onClick={handler}>{btnText}</button>;

  } else {
    return <button className="btn btn-prima ry" onClick={handler}>{btnText}</button>;
  }
};

export default Button;

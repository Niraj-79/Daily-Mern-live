import "./Button.CSS";

export function DangerButton() {
  return <button className="red-button">Delete</button>;
}

export function SuccessButton() {
  return <button className="green-button">Save</button>;
}

const Button = ({ btnType, btnText, handler }) => {
  if (btnType === "success") {
    return (
      <button className="btn btn-success button" onClick={handler}>
        {btnText}
      </button>
    );
  } else if (btnType === "danger") {
    return (
      <button className="btn btn-danger button" onClick={handler}>
        {btnText}
      </button>
    );
  } else {
    return (
      <button className="btn btn-primary button" onClick={handler}>
        {btnText}
      </button>
    );
  }
};

export default Button;

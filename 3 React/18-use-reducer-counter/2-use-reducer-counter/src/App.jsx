import { useReducer, useState } from "react";

const counterReducer = (currentState, action) => {
  console.log("In Reducer", currentState, action);
  let newState = currentState;

  switch (action.type) {
    case "INCREMENT":
      newState += 1;
      break;
    case "DECREMENT":
      newState -= 1;
      break;
    case "RESET":
      newState = 0;
      break;
    case "DOUBLE":
      newState *= 2;
      break;
    case "CHANGEBY":
      newState = newState + parseInt(action.payload.num);
      break;
    default:
      break;
  }
  return newState;

  // if (action.type === "INCREMENT") {
  //   newState += 1;
  // } else if (action.type === "DECREMENT") {
  //   newState -= 1;
  // }
  // return newState;
};

function App() {
  const initialState = 0;

  const changeByInput = useState();
  const [counterVal, counterDispatch] = useReducer(
    counterReducer,
    initialState
  );

  const handleIncrement = () => {
    console.log("Increment Clicked");
    counterDispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    console.log("Decrement Clicked");
    counterDispatch({
      type: "DECREMENT",
    });
  };

  const handleChangeBy = () => {
    const num = changeByInput.current.value;
    changeByInput.current.value = 0;
    counterDispatch({
      type: "CHANGEBY",
      payload: { num },
    });
  };

  return (
    <>
      <h1>Count: {counterVal} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => counterDispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => counterDispatch({ type: "DOUBLE" })}>
        Double
      </button>
      <button onClick={handleChangeBy}>Change By</button>
      <input type="text" ref={changeByInput} placeholder="Number" />
    </>
  );
}

export default App;

import { act, useReducer, useState } from "react";

// ---------------------------------------------------------------------------------------------------------------
// // Example useState Only
// function App() {
//   const [counterVal, setCounterVal] = useState(0);

//   const handleIncrement = () => {
//     console.log("Increment Clicked")
//     setCounterVal((current) => current + 1);
//   };

//   const handleDecrement = () => {
//     console.log("Decrement Clicked")
//     setCounterVal((current) => current - 1);
//   };

//   return (
//     <>
//       <h1>Count: {counterVal} </h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </>
//   );
// }
// export default App;

// ---------------------------------------------------------------------------------------------------------------
// Example useReducer Only

//   // Example 1
// const counterReducer = (currentState, action) => {
//   if (action.type === "INCREMENT") {
//     return currentState + 1;
//   } else if (action.type === "DECREMENT") {
//     return currentState - 1;
//   } else {
//     return currentState;
//   }
// };

// Example 2
const counterReducer = (currentState, action) => {
  console.log("In Reducer", currentState, action);
  let newState = currentState;
  if (action.type === "INCREMENT") {
    newState += 1;
  } else if (action.type === "DECREMENT") {
    newState -= 1;
  }
  return newState;
};

function App() {
  //const [counterVal, counterDispatch] = useReducer(counterReducer, 0);

  const initialState = 0;
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

  return (
    <>
      <h1>Count: {counterVal} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;

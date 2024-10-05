import { useState } from "react";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";

function App() {
  console.log("Repainting App");
  const [displayalVal, setDisplayVal] = useState(0);

  return (
    <>
      <h1>Calculator</h1>
      <Display textToShow={displayalVal} />
      <NumberPad displayVal={displayalVal} setDisplayVal={setDisplayVal} />
    </>
  );
}

export default App;

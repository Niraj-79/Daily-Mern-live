import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Place Holder Text</div> <hr />
      <button type="button" class="btn btn-primary kg-btn">
        Primary
      </button>
      <button type="button" class="btn btn-secondary kg-btn">
        Secondary
      </button>
      <button type="button" class="btn btn-success kg-btn">
        Success
      </button>
      <button type="button" class="btn btn-danger kg-btn">
        Danger
      </button>
      <button type="button" class="btn btn-warning kg-btn">
        Warning
      </button>
      <button type="button" class="btn btn-info kg-btn">
        Info
      </button>
      <button type="button" class="btn btn-light kg-btn">
        Light
      </button>
      <button type="button" class="btn btn-dark kg-btn">
        Dark
      </button>
      <button type="button" class="btn btn-link kg-btn">
        Link
      </button>
      <hr />

      <button type="button" class="btn btn-outline-primary kg-btn">
        Primary
      </button>
      <button type="button" class="btn btn-outline-secondary kg-btn">
        Secondary
      </button>
      <button type="button" class="btn btn-outline-success kg-btn">
        Success
      </button>
      <button type="button" class="btn btn-outline-danger kg-btn">
        Danger
      </button>
      <button type="button" class="btn btn-outline-warning kg-btn">
        Warning
      </button>
      <button type="button" class="btn btn-outline-info kg-btn">
        Info
      </button>
      <button type="button" class="btn btn-outline-light kg-btn">
        Light
      </button>
      <button type="button" class="btn btn-outline-dark kg-btn">
        Dark
      </button>
    </>
  );
}

export default App;

import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    /* first method */
    // <div>
    //   <center>
    //     <AppName />
    //     <AddTodo />
    //     <TodoItems />
    //   </center>
    // </div>

    /* second method */
    // <React.Fragment>
    //   <center>
    //     <AppName />
    //     <AddTodo />
    //     <TodoItems />
    //   </center>
    // </React.Fragment>

    /* third method & right method*/
    <>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems />
      </center>
    </>
  );
}

export default App;

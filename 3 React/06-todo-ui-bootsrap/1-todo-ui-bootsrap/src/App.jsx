function App() {
  return (
    <>
      <center>
        <h1>Todo App</h1>

        <div className="row">
          <div className="col-5">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo Here"
            ></input>
          </div>

          <div className="col-4">
            <input type="date" className="form-control"></input>
          </div>

          <div className="col-3">
            {" "}
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

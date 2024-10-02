import List from "./components/List";

function App() {
  const studentArr = ["Niraj", "Rohan", "Mohan", "Sanjay", "Kamal", "Anuj"];
  console.log("Came to paint App component");
  console.log(studentArr);

  const onChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value);
    //console.log(event.key);

    if (event.key === "Enter") {
      console.log(event.target.value);
      studentArr.push(event.target.value);
      console.log(studentArr);
    }
  };

  return (
    <>
      <h1 className="text-5xl">Learners of Mern Stack</h1>
      <List list={studentArr} />
      <input
        type="text"
        placeholder="Enter Your Name"
        onKeyDown={onChangeHandler}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import List from "./components/List";

function App() {
  
  console.log("Painting App Component");

  const [studentArr, setStudentArr] = useState(["Rohan","Mohan","Sanjay", "Kamal","Anuj",]);

  // const studentArr = studentArrState[0];
  // const setStudentArr = studentArrState[1];
  console.log("State Value is:", studentArr);

  console.log("Came to paint App component");
  console.log(studentArr);

  const onChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value);
    //console.log(event.key);

    if (event.key === "Enter") {
      console.log(event.target.value);
      // studentArr.push(event.target.value);
      //const newArr = [event.target.value];
      //const newArr = [event.target.value, ...studentArr];
      const newArr = [...studentArr, event.target.value];
      event.target.value = "";

      setStudentArr(newArr);
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

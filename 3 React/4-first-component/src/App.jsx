import "./App.css";
import Button, { DangerButton, SuccessButton } from "./components/Buttons";
import DynamicComponent from "./components/DynamicComponent";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import RandonNumber from "./components/RandomNumber";
import StudentList from "./components/StudentList";
import Title from "./components/Title";

function App() {
  const students = ["Ridoy", "Nafees", "Alok", "Surya", "Niraj", "Ashish"];

  const newStudents = ["Ram", "Geeta", "Sohan", "Mohan", "Reeta", "Rohan"];

  const clickHandler = () => {
    console.log("clickHandler clicked");
  };
  const deleteHandler = () => {
    console.log("deleteHandler clicked");
  };
  const sendHandler = () => {
    console.log("sendHandler clicked");
  };

  return (
    <>
      <Title titleText="Hello world" />
      <Title titleText="KGCoding" />
      <Title titleText="Subscribe" />
      <Title titleText="Learning props" />

      <Heading />
      <RandonNumber />
      <RandonNumber />
      <RandonNumber />
      <RandonNumber />
      <Paragraph />
      <DangerButton />
      <SuccessButton />
      <DynamicComponent />

      <StudentList students={students} />
      <StudentList />
      <StudentList students={newStudents} />

      <Button btnType="success" btnText={"Click Me"} handler={clickHandler} />
      <Button btnType="danger" btnText={"Delete"} handler={deleteHandler} />
      <Button btnType="" btnText={"Send"} handler={sendHandler} />
    </>
  );
}

export default App;

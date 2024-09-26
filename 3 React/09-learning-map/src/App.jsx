import List from "./components/List";

function App() {
  
const studentArr = ["Niraj", "Rohan", "Mohan", "Sanjay", "Kamal", "Anuj", "Gautam"];

  return (
    <>
      <h1 className="text-5xl">Learners of Mern Stack</h1>
      <List list={studentArr}/>
    </>
  );
}

export default App;

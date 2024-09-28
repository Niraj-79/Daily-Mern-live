import style from "./App.module.CSS";
import Container from "./Container";

function App() {
  return (
    <>
    <Container > 
    <h1 className={style.heading}>red</h1>
    <p className={style.para}>This is a paragraph </p>
    <p className={`${style.para} ${style.heading}`}>This is a double class</p>
    </Container>

    <Container>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ipsa inventore officia asperiores eius nemo.</p>
    </Container>

    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, totam! Ipsum, dolores illum velit totam laboriosam facilis repudiandae et fugiat hic molestias eaque omnis magni assumenda ullam optio tempore? Quas?</p>
    </Container>
    </>
  );
}

export default App;

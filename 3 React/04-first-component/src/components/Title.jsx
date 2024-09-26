import "./Heading.CSS";

/* // first 
const Title = () => {
  return <h1 className="heading">Class vs Function Component</h1>;
}; */

 // second
const Title = (props) => {
  return <h1 className="heading">{props.titleText}</h1>;
};


export default Title;

const list = ({ list }) => {
  //   const studentArr = ["Niraj", "Rohan", "Mohan", "Sanjay", "Kamal", "Anuj", "Gautam"];

  return (
    <>
      <ol className="list-disc ml-10 mt-5 text-xl">
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ol>

      {/* <ol className="list-disc ml-10 mt-5 text-xl">
            {studentArr.map(studenName => <li>{studenName}</li>)}
        </ol>
        */}

      <ul className="list-disc ml-10 mt-5 text-xl">
        {[
          <li>Niraj</li>,
          <li>Rohan</li>,
          <li>Mohan</li>,
          <li>Sanjay</li>,
          <li>Kamal</li>,
          <li>Anuj</li>,
        ]}
      </ul>

      <ol className="list-decimal text-xl m-8">
        <li>Niraj</li>
        <li>Rohan</li>
        <li>Mohan</li>
        <li>Sanjay</li>
        <li>Kamal</li>
        <li>Anuj</li>
      </ol>
    </>
  );
};
export default list;

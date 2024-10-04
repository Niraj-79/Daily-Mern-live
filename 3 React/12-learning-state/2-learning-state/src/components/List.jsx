const list = ({ list }) => {
  //  const studentArr = ["Niraj", "Rohan", "Mohan", "Sanjay", "Kamal", "Anuj", "Gautam"];

  // if (!list || list.length === 0) {
  //   return <h2>No Students are here</h2>;
  // }

  return (
    <>
      {!list || list.length === 0 ? (
        <h2>No Students are here</h2>
      ) : (
        <h2>Here are the students</h2>
      )}
      {list && list.length > 0 && (
        <ol className="list-decimal ml-10 mt-5 text-xl">
          {list.map((item)   => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}

      {/* <ol className="list-disc ml-10 mt-5 text-xl">
            {studentArr.map(studenName => <li>{studenName}</li>)}
        </ol>
        */}

      {/* <ul className="list-disc ml-10 mt-5 text-xl">
        {[
          <li>Niraj</li>,
          <li>Rohan</li>,
          <li>Mohan</li>,
          <li>Sanjay</li>,
          <li>Kamal</li>,
          <li>Anuj</li>,
        ]}
      </ul> */}

      {/* <ol className="list-decimal text-xl m-8">
        <li>Niraj</li>
        <li>Rohan</li>
        <li>Mohan</li>
        <li>Sanjay</li>
        <li>Kamal</li>
        <li>Anuj</li>
      </ol> */}
    </>
  );
};
export default list;



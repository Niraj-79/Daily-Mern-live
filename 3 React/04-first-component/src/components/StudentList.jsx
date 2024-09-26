/* // first
const StudentList = () => {
  const students = ['Ridoy', 'Nafees', 'Alok', 'Surya', 'Niraj', 'Ashish', 'Gurpreet', 'Yousuf'];
  return (
    <ol>
      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ol>
  );
};
 */

/*
// second
const StudentList = (props) => {
  return (
    <ol>
      {props.students.map((student, index) => (
        <li key={student}>{student}</li>
      ))}
    </ol>
  );
};
*/

// third
const StudentList = (props) => {
  console.log(props.students);
  if (!props.students) {
    return <h2>No Students</h2>;
  }
  return (
    <ol>
      {props.students.map((student, index) => (
        <li key={student}>{student}</li>
      ))}
    </ol>
  );
};
export default StudentList;

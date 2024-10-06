import React from "react";
import { useRef } from "react";

const TestForm = () => {
  console.log("Painting Form");

  //   const firstName = useRef(50);
  //   console.log(firstName.current);

  const firstName = useRef();
  const lastName = useRef();
  const dob = useRef();
  console.log(firstName.current);

  //   const submitHandler = (event) => {
  //     console.log(event);
  //     event.preventDefault();
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(dob.current.value);
  };

  //   //  Only for demo detail & testing
  //       const obj = {
  //         firstName: "Niraj",
  //         lastName: "Kumar",
  //         dob: "22/12/2003",
  //       };

  //   const handleOnChange = (event) => {
  //     firstName.current = event.target.value;
  //     console.log(firstName.current);
  //   };

  //   return (
  //     <div>
  //       <form action="/submit-data" onSubmit={submitHandler}>
  //         <input type="text" ref={firstName} placeholder="First Name" name="firstName" /> <br />
  //         <input type="text" placeholder="Last Name" name="lastName" /> <br />
  //         <label htmlFor="dob">DOB</label>
  //         <input type="date" id="dob" name="dob" /> <br />
  //         <input type="submit" />
  //       </form>
  //     </div>
  //   );

  //   return (
  //     <div>
  //       <form action="/submit-data" onSubmit={submitHandler}>
  //         <input
  //           type="text"
  //           onChange={handleOnChange}
  //           placeholder="First Name"
  //           name="firstName"
  //         />
  //         <br />
  //         <input type="text" placeholder="Last Name" name="lastName" /> <br />
  //         <label htmlFor="dob">DOB</label>
  //         <input type="date" id="dob" name="dob" /> <br />
  //         <input type="submit" />
  //       </form>
  //     </div>
  //   );
  //};

  return (
    <div>
      <form action="/submit-data" onSubmit={submitHandler}>
        <input
          type="text"
          ref={firstName}
          placeholder="First Name"
          name="firstName"
        />
        <br />
        <input
          type="text"
          ref={lastName}
          placeholder="Last Name"
          name="lastName"
        />
        <br />
        <label htmlFor="dob">DOB</label>
        <input type="date" ref={dob} id="dob" name="dob" /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TestForm;

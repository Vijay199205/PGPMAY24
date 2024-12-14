import React, { useRef } from "react";

function Uncontrolled() {
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("fname", fnameRef.current.value);
    console.log("lname", lnameRef.current.value);
  };

  return (
    <div>
      <h1>controlled components</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          name="fname"
          ref={fnameRef}
          placeholder="Enter your Firstname"
        />
        <br /> <br />
        <input
          type="text"
          name="lname"
          ref={lnameRef}
          placeholder="Enter your Firstname"
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Uncontrolled;

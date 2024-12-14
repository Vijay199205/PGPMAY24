import React, { useState } from "react";
function Controlled() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
  });

  function handlerInput(e) {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }
  return (
    <div>
      <h1>controlled components</h1>
      <form>
        <input
          type="text"
          name="fname"
          value={values.fname}
          onChange={handlerInput}
          placeholder="Enter your Firstname"
        />
        <input
          type="text"
          name="lname"
          value={values.lname}
          onChange={handlerInput}
          placeholder="Enter your Firstname"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Controlled;

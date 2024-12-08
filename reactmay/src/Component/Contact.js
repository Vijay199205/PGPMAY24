import React from 'react'



function Contact({firstName, age, salary}) {
  console.log(firstName, age, salary)
  return (
    <div>
      <h1>My name is {firstName}</h1>
      <h2>My age is {age}</h2>
      {salary && <h2>My salary is {salary}</h2>}
    </div>
  )
}

// function Contact(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>My name is {props.firstName}</h1>
//       <h2>My age is {props.age}</h2>
//       {props.salary && <h2>My salary is {props.salary}</h2>}
//     </div>
//   )
// }

export default Contact

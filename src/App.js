import React, { useState }  from 'react'

function App() {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState(false)
  function handleSubmit(e){
    e.preventDefault();
  // setName("Hello Good Moring Vijay")
  setCondition(true);
  }
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
   <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
    <button type='submit'>Submit</button>
    </form>
    {condition && <h1>{name}</h1>}
    </div>
  )
}

export default App

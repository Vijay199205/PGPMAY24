import React, { useState } from 'react'

function App() {
  
  const [condition, setCondition] = useState(false);
  function handleTheme(){
    setCondition(!condition);
  }
  return (
    <div style={{backgroundColor:condition?"black":"white", color:condition?"white":"black"}}>
    <h1>Hello Word</h1>
    <p>Learning State</p>
    <button onClick={handleTheme}>{condition?"Light":"white"} Mode</button>

   
    </div>
  )
}

export default App

import React, { useEffect, useState }  from 'react'
import Post from './Post';

function App() {

const [count, setCount] = useState(0);

useEffect(()=>{
  console.log("Vijay");
},[count])

  return (
    <div>
    <Post />
    <h1>count: {count}</h1>
    <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default App;


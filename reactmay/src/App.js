import React, { useState } from 'react';
import About from './Component/About';
import './App.css';
import Contact from './Component/Contact'
import Blog from './Component/Blog';

function App() {
  let visisble = true;
  const [value , display] = useState(true);

  const handaler=()=>{
    display(!value)
  }
  return(
  <div>
  {value && <h1>My first react app</h1>}
    {visisble ? <About/> : <Contact/>}
    {visisble && <Blog/>}
    <button onClick={handaler}>value dispaly</button>
   </div>
  )
}



export default App;

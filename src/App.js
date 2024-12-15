import React ,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Routes/Home'
import About from './Component/Routes/About'
import Contact from './Component/Routes/Contact'
import Users from './Component/Routes/Users'
import Navbar from './Component/Routes/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
     <button onClick={()=>setCount(count + 1)}>{count}</button>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/user" element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



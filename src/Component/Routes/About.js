import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
    function handlecontact(){
      navigate("/contact")
    }
  return (
    <div>
   <h1>About Component</h1> 
<button onClick={handlecontact}>CONTACT pAGE</button>
  
    </div>
  )
}

export default About
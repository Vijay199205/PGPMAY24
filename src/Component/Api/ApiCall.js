import React , {useEffect,useState}from 'react';
import './Api.css';
import axios from 'axios';

function ApiCall() {
    const [fact, setFact] = useState ('');
  useEffect(()=>{
    //fectApi()
    fetchApiViaAxios()
  },[])

  function fectApi(){
     fetch("https://catfact.ninja/fact")
.then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data.fact)
      setFact(data.fact)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  function fetchApiViaAxios(){
    axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      //console.log(res.data.fact)
      setFact(res.data.fact)
    })
    .catch((err)=>{
      console.log(err)
    })
}
  return (
    <div>
        <div className='app'>
      <div className='card'>
        <h1 className='heading'>{fact}</h1>
        <button className='button'>
          <span onClick={fetchApiViaAxios}>show More</span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default ApiCall

import React, { useContext } from 'react'
import { myContext } from '../../App'
export default function CountChil() {
    const {count, setCount} = useContext(myContext);
    //console.log(data)
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

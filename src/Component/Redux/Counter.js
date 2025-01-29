import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incr,decr ,setBgColor} from './action';

export default function Counter() {
  const count =  useSelector((state)=>state.count);
  const bgColor = useSelector((state)=>state.bgColor)
  const dispatch =  useDispatch();
  console.log(bgColor)
  return (
    <div style={{backgroundColor:bgColor.backgroundColor}}>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(incr())}>INCREMENT</button>
      <button onClick={()=>dispatch(decr())}>DECREMENT</button>
      <button onClick={()=>dispatch(setBgColor("blue"))}>Back Ground color</button>
    </div>
  )
}

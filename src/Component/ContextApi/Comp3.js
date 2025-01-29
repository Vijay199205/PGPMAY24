
import React, { useContext } from 'react';
import { firstName } from '../../App';


export default function Comp3() {
const fname = useContext(firstName);
console.log("data", fname)
  return (
    <div>
      <h1>Comp3</h1>
    </div>
  )
}

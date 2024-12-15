import React, { useEffect, useState } from 'react'

function Github() {
    const [user, setUser] =  useState("");
    const [text, setText] = useState("adfar-136");
    useEffect(()=>{
        handleSearch(text);
    },[text])

    async function handleSearch(SearchText){
        let data = await fetch(`https://api.github.com/users/${SearchText}`)
            let response = await data.json();
           setUser(response)
    }
  return (
    <div>
    <h1>{user.name}</h1>
    <h1>{user.bio}</h1>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>handleSearch(text)}>git Search</button>
    </div>
  )
}

export default Github

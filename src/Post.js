import React, { useState,useEffect } from 'react'

function Post() {
const [joke, setJoke] = useState('');
useEffect(()=>{
    handlePost();
},[])
    function handlePost(){
        console.log("calling")
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((result)=>result.json())
            .then((response)=>setJoke(response))
    }
    //console.log({post.userId})
  return (
    
    <div>
    <h1>Displaying Post in Json  Placeholder Data</h1>
    <p>Joke Id:{joke.id}</p>
      <p>Joke Setup:{joke.setup}</p>
      <p>Joke Punchline:{joke.punchline}</p>
      <button onClick={handlePost}>Gernerate post</button>
    </div>
  )
}

export default Post

import { useState } from 'react'


function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <h3>Jokes and Full Stack app</h3>
      <h5>The length of Jokes: {jokes.length}</h5>
      {
        jokes.map( (joke, index)=>{
               <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
               </div>
        })
      }
    </>
  )
}

export default App

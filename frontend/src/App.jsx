import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setJokes(response.data);
        } else {
          console.error('Unexpected response format: ', response.data);
          setJokes([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching jokes: ', error);
        setJokes([]); 
      });
  }, []); 

  return (
    <>
      <h3>Jokes and Full Stack App</h3>
      <h5>The length of Jokes: {jokes.length}</h5>
      {Array.isArray(jokes) && jokes.length > 0 ? (
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
          </div>
        ))
      ) : (
        <p>No jokes available.</p>
      )}
    </>
  );
}

export default App;

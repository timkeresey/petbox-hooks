import React from 'react';
import PetList from './PetList'
import './App.css';

function App() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

//declare api call function that uses state hooks to set local state of pets.
  const getPets = async () => {
    const url = 'http://localhost:3001/api/v1/pets';
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const pets = await response.json();
      setPets(pets);
    } catch(error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

// assign api call function to useEffect hook to give it componentDidMount characteristics.
  // must return a function, cannot return a promise. This is why getPets is defined outside of useEffect and called within it
  useEffect(() => {
    getPets();
  }, [])

  return (
    <div className='App'>
      <h1>PetBox</h1>
      { error && error }
      { isLoading ? <div>Loading...</div> : <PetList pets={pets} /> }
    </div>
  )
}
export default App

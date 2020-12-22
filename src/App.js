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

//Also, notice that we have passed an empty array as a second argument to useEffect. Without doing this, we would get caught in a infinite loop because the useEffect hook runs when the component mounts and after EVERY update/render. Because we are setting the state after every data fetch, the component updates and the effect runs again. By adding an empty array as the second argument, we avoid activating the effect hook when the component updates and it will only run once when the component mounts and unmounts. If we want the effect to run when one of the variables is updated, then we would add that variable to the array. This could be a prop or a piece of state. Check out the docs for more info on conditionally firing an effect.

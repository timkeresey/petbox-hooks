import React from 'react';
import PetList from './PetList'
import './App.css';

function App() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className='App'>
      <h1>PetBox</h1>
      { error && error }
      { isLoading ? <div>Loading...</div> : <PetList pets={pets} /> }
    </div>
  )
}
export default App

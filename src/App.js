import React from 'react';
import PetList from './PetList';
import usePets from './usePets';
import './App.css';

function App() {
  const {pets, isLoading, error} = usePets();

  return (
    <div className='App'>
      <h1>PetBox</h1>
      { error && error }
      { isLoading ? <div>Loading...</div> : <PetList pets={pets} /> }
    </div>
  )
}
export default App

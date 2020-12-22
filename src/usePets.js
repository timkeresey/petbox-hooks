import React, { useState, useEffect } from 'react';

function usePets() {
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
  }

  // assign api call function to useEffect hook to give it componentDidMount characteristics.
    // must return a function, cannot return a promise. This is why getPets is defined outside of useEffect and called within it
  useEffect(() => {
    getPets();
  }, [])

//we have to remember to return all the variables inside the usePets function so that we can have access to them in the future. Now we can use the extracted data fetching logic anywhere in our application and give any component access to the pets.
  return {pets, isLoading, error};
}

export default usePets;

//Also, notice that we have passed an empty array as a second argument to useEffect. Without doing this, we would get caught in a infinite loop because the useEffect hook runs when the component mounts and after EVERY update/render. Because we are setting the state after every data fetch, the component updates and the effect runs again. By adding an empty array as the second argument, we avoid activating the effect hook when the component updates and it will only run once when the component mounts and unmounts. If we want the effect to run when one of the variables is updated, then we would add that variable to the array. This could be a prop or a piece of state. Check out the docs for more info on conditionally firing an effect.

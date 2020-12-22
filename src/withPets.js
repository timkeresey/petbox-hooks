import React, { useState, useEffect } from 'react';

function usePets() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  useEffect(() => {
    getPets();
  }, [])

//we have to remember to return all the variables inside the usePets function so that we can have access to them in the future. Now we can use the extracted data fetching logic anywhere in our application and give any component access to the pets.
  return {pets, isLoading, error};
}

export default usePets;

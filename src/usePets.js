import { useState, useEffect } from 'react'

function usePets() {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')

  const getPets = async () => {
    setIsError('')
    setIsLoading(true)
    try {
      const url = 'http://localhost:3001/api/v1/pets'
      const response = await fetch(url)
      const pets = await response.json()
      setPets(pets)
    } catch(error) {
      setIsError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getPets()
  }, [])

  return {pets, isLoading, isError, getPets}
}

export default usePets
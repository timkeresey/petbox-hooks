import React from 'react'

function Nav({ pets }) {
  const displayNames = pets.map(pet => (
    <li key={pet.id}>{pet.name}</li>
  ))
  
  return (
    <ul>
      {displayNames}
    </ul>
  )
}

export default Nav
import React from 'react'
import PetDetail from './PetDetail'

function PetList({ pets }) {
  const displayPets = pets.map(pet => (
    <PetDetail key={pet.id} {...pet} />
  ))
  return (
    <div>
      {displayPets}
    </div>
  )
}

export default PetList
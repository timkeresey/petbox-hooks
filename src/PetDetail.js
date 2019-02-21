import React from 'react'

function PetDetail({ name, breed }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{breed}</p>
    </div>
  )
}

export default PetDetail
import React, { Component } from 'react'

function withPets(WrappedComponent) {
  return class extends Component {
    state = {
      pets: []
    }

    getPets = async () => {
      const url = 'http://localhost:3001/api/v1/pets'
      const response = await fetch(url)
      const pets = await response.json()
      return pets
    }

    async componentDidMount() {
      const pets = await this.getPets()
      this.setState({ pets })
    }

    render() {
      const { pets } = this.state
      return (
        <WrappedComponent pets={pets} {...this.props} />
      )
    }
  }
}

export default withPets
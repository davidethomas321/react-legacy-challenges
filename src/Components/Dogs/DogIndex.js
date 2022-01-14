import React, { Component } from 'react'

class GetDogImage extends Component {
  constructor() {
    super()
    this.state = {
      fetchedDog: '',
    }
  }

  getDog() {
    fetch(`https://dog.ceo/api/breeds/image/random`, {
      method: 'GET'
    }).then(res => res.json())
    .then(res => {
      this.setState({
        fetchedDog: res.message,
      })
    })
    .catch((err) => console.log(err));
    this.timer = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getDog()}>Click for Dog</button>
          <img  src={this.state.fetchedDog} alt="No dog fetched"/>
      </div>
    )
  }
}

export default GetDogImage;
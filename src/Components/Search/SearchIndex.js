import React, { Component } from 'react';
import {Input, Button} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor() { 
    super()
    this.state = {
     bands: ['led zeppelin', 'fleetwood mac', 'pink floyd', 'judas priest', 'queen', 'the cars', 'the rolling stones', 'aerosmith'],
     result: [],
     searchEntry: ''
   }
  }

  searchBand() {
    this.setState({result: this.state.bands.filter(search => search.includes(this.state.searchEntry.toLowerCase()))})
  }
  
  render() {
    return (
      <div>
       <h1>Search a 70's band!</h1>
       <br/>
       <Input onChange={(e) => this.setState({searchEntry: e.target.value})} id='searchBar' placeholder='Search Here' />
       <br/>
       <Button onClick={()=>this.searchBand()} >Search</Button>
       <br/>
       <br/>
       <h3>Results:</h3>
       {this.state.result.map(item => {return(<li key={item}>{item}</li>)})}
     </div>
    )
  }
}
 
export default SearchIndex;
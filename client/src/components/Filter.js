import React, { Component } from 'react'
import PlantList from "./PlantList";
import axios from "axios";
class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      plants: [],
      originalList: []
    }
  }
  filter = (e) => {
      e.preventDefault()
    const filteredData = this.state.plants.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    this.setState({ plants: filteredData})
  }
  reset = (e) => {
      e.preventDefault()
      this.setState({plants: this.state.originalList})

  }
  componentDidMount(){
    axios
    .get('http://localhost:3333/plants')
    .then( res => {
     this.setState({plants: res.data.plantsData, originalList: res.data.plantsData})
    })
    console.log(this.state.plants)
  }
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
    console.log(this.state.searchTerm)
  }

  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Plant: </label>
        <input type="text" id="filter" 
          value={this.state.searchTerm} 
          onChange={this.handleChange}/>
          <button onClick={this.filter}>Filter</button>
          <button onClick={this.reset}>Reset</button>
      <PlantList addToCart={this.props.addToCart} plants={this.state.plants} onChange={this.filter} />
      </div>
      )
  }
}

export default filterForm
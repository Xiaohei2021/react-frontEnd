import React, { Component } from 'react'

export default class FoodSearch extends Component {

state={
    query: ""
}

handleQuery = (e) =>{
  this.setState({query: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.fetchDishes(this.state.query)

}


  render() {
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter the name of the dish"
            value = {this.state.query}
            onChange={this.handleQuery}   
          />
          <input type="submit" />
        </form>

      </div>
    )
  }
}

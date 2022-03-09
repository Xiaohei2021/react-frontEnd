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
  
}


  render() {
    return (
      <div>
        <h4>Which dish do you have in mind today?</h4>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter the name of the dish"
            value = {this.state.query}
            onChange={this.handleQuery}   
          />
          <input type="submit"/>
        </form>

      </div>
    )
  }
}

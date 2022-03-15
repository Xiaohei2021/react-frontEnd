import React, { Component } from 'react'
import { saveTheRecipe } from '../actions/actions'
import { connect } from 'react-redux'

class Dish extends Component {

  handleSave = () => {
    
    // debugger
    const data = {
      name: this.props.dish.strMeal,
      ingredients: this.props.ingredients,
      cooking_Instructions: this.props.dish.strInstructions
    }

    this.props.saveTheRecipe(data)
  }

  render() {
    return (
      <div>
        <h4>{this.props.dish.strMeal}</h4>
        <img src={this.props.dish.strMealThumb}/><br/>
        {this.props.ingredients}<br/> 
        {this.props.dish.strInstructions}<br/>
        <button onClick={this.handleSave}>Save Recipe</button><hr/>
        {/* {ingredient}  */}
        {/* {console.log(this.state)} */}
        {/* {data} */}

      </div>
    )
  }
}
export default connect(null, { saveTheRecipe })(Dish)


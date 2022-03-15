import React, { Component } from 'react'
import Dish from '../Dish'


export default class QueryList extends Component {
    
  render() {
    // debugger

    const recipeList =()=> this.props.fetchedRecipe.map(recipe => {
        return (
          <Dish key={recipe.idMeal} dish={recipe} link />
        )})        
    return (
        <div>
            {recipeList()}
        </div>
    )
  }
}

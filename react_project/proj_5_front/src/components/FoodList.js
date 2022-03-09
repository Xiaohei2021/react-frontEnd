import React, { Component } from 'react'

export default class FoodList extends Component {
  render() {

      const randomRecipes = this.props.surprises.meals.map((recipe) => (<li key={recipe.idMeal}>{recipe.strMeal}</li>))
    return (
      <div>
        FoodList
        {randomRecipes}  
      </div>
      
    )
  }
}


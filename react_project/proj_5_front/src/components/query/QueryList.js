import React, { Component } from 'react'
import Dish from '../Dish'


export default class QueryList extends Component {
    
  render() {


    const recipeList =()=> this.props.fetchedRecipe.map(recipe => {
        // console.log(this.props)
        
        const ingredients = Object.fromEntries(Object.entries(recipe).filter(([key]) => key.includes('strIngredient')))
        const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])})
        const filteredIngredients = data.filter(i => i.length).join(",")
        // debugger
        return (
          <Dish key={recipe.idMeal} dish={recipe} ingredients={filteredIngredients} link />
        )})        
    return (
        <div>
            {recipeList()}
        </div>
    )
  }
}

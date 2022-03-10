import React, { Component } from 'react'
import Dish from './Dish'

export default class FoodList extends Component {
  render() {
    // debugger
      // const { surprises } = this.props;
      // const randomdishes = surprises.map(recipe => {
      //   return (
      //     <Dish key={recipe.idMeal} dish={recipe} />
      //   )})

      const randomdishes =this.props.surprises.map(recipe => {
        return (
          <Dish key={recipe.idMeal} dish={recipe} link />
        )})

      const recipeList =this.props.queryResult.map(recipe => {
        return (
          <Dish key={recipe.idMeal} dish={recipe} link />
        )})     

    return (
      <div>
        <h3>Here are the recipes you can learn from today!</h3>
    
        {randomdishes}  
        {recipeList}
      </div>
      
    )
  }
}


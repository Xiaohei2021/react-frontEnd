import React, { Component } from 'react'
import Dish from './Dish'

export default class SurpriseList extends Component {
  render() {
    // debugger
      // const { surprises } = this.props;
      // const randomdishes = surprises.map(recipe => {
      //   return (
      //     <Dish key={recipe.idMeal} dish={recipe} />
      //   )})

      const randomdishes =this.props.surprises.map(recipe => {
        return (
          <Dish key={recipe.idMeal} dish={recipe} />
        )})


    return (
      <div className='card'>
        
    
        {randomdishes}  
        {/* {recipeList} */}
      </div>
      
    )
  }
}


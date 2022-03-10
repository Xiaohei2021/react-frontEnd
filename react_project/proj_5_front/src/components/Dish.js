import React from 'react'

export default function Dish(props) {
    
  return (
    <div>
        Dish
        {props.dish.strMeal}
        {/* {props.dish.strInstructions} */}
        {/* <img src={props.dish.strMealThumb}/> */}
        {/* {props.dish.strIngredient1} */}
    </div>
  )
}

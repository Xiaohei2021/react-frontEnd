import React from 'react'

export default function Dish(props) {
  const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, 
      strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
      strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, 
      strIngredient19, strIngredient20 } = props.dish
  
   

  const ingredient = {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, 
      strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
      strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, 
      strIngredient19, strIngredient20  }

  // Object.keys(obj).
  // filter((key) => key.includes('Name')).
  // reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] })}, {});

  debugger
  return (
    <div>
        Dish
        {props.dish.strMeal}
        {/* {props.dish.strInstructions} */}
        <img src={props.dish.strMealThumb}/>
        {/* {props.dish.strIngredient1} */}
        {ingredient}
    </div>
  )
}

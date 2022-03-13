import React from 'react'

export default function Dish(props) {
  let {strIngredient1,strIngredient2,strIngredient3,strIngredient4, strIngredient20 } 
  // const ingredient = {...props.slice(strIngredient1, strIngredient20) }
  Object.keys(obj).
  filter((key) => key.includes('Name')).
  reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] })}, {});

  debugger
  return (
    <div>
        Dish
        {props.dish.strMeal}
        {/* {props.dish.strInstructions} */}
        <img src={props.dish.strMealThumb}/>
        {/* {props.dish.strIngredient1} */}
    </div>
  )
}

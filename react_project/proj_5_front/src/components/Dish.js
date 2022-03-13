import React from 'react'

export default function Dish(props) {


  // solution #1{
  // const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, 
  //     strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
  //     strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, 
  //     strIngredient19, strIngredient20 } = props.dish
  
 // const ingredient = {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, 
  //     strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
  //     strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, 
  //     strIngredient19, strIngredient20  }
// }


  // solution #2
  // const meal = props.dish
   
  // Object.keys(obj).
  // filter((key) => key.includes('Name')).
  // reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] })}, {});

  // Object.keys(meal).
  // filter((key) => key.includes('strIngredient')).
  // reduce((cur, key) => { return Object.assign(cur, { [key]: neal[key] })}, {});



  //solution #3 
  const meal = props.dish
  //Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes('Name')));
  const ingredient = Object.fromEntries(Object.entries(meal).filter(([key]) => key.includes('strIngredient')));

  let data = Object.keys(ingredient).map(function(key){ return(ingredient[key])})

  let filtered = data.filter(i => i.length > 0)

  // debugger
  return (
    <div>
        Dish
        {props.dish.strMeal}
        {/* {props.dish.strInstructions} */}
        <img src={props.dish.strMealThumb}/>
        {/* {props.dish.strIngredient1} */}
{/* 
        {ingredient} */}
        {/* {data} */}
        {filtered}

    </div>
  )
}

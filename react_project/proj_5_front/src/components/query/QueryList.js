// import React, { Component } from 'react'
import Dish from '../surprises/Dish'
import { useOutletContext, Link  } from 'react-router-dom'


// export default class QueryList extends Component {
    
//   render() {

//     const recipeList =()=> this.props.fetchedRecipe.map(recipe => {
//         // console.log(this.props)
        
//         const ingredients = Object.fromEntries(Object.entries(recipe).filter(([key]) => key.includes('strIngredient')))
//         const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])})
//         // const filteredIngredients = data.filter(i => console.log(i))
//         const filteredIngredients = data.filter(i => i.length && i!== null).join(",")
//         // debugger
//         // debugger
//         return (
//           <Dish key={recipe.idMeal} dish={recipe} ingredients={filteredIngredients} link />
//         )})        
//     return (
//         <div>
//             <h3>Here are all the recipe you can learn from today!</h3>
//             {recipeList()}
//         </div>
//     )
//   }
// }
// recipeDB.map(r=>{return(Object.fromEntries(Object.entries(r).filter(([key]) => key.includes('id'))))})
 import React from 'react'
 
 export default function QueryList() {
   return (
     <div>QueryList</div>
   )
 }
 
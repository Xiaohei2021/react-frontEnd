// import React, { Component } from 'react'
// import Dish from '../surprises/obsolete/Dish'
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
   
  const queryDB = useOutletContext();

   return (
     <div>
      <ol>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",}}
        >
          {queryDB.map((query, index) => (
            <li key={query.strMeal}>
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/query/${query.idMeal}`}
                key={index}
              >
                {query.strMeal} 
              </Link>
            </li>))
          }
        </nav>
     </ol>
    </div>
   )
 }
 
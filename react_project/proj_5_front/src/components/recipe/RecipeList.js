import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Outlet, Link  } from 'react-router-dom'
import Recipe from './Recipe'

// const RecipeList = (props) => {

//   // debugger
//     // const recipesList = Object.keys(props.savedRecipe).map((recipeId) => (
//     //     <Link key={recipeId} to={`/recipes/${recipeId}`} >
//     //         {props.savedRecipe[recipeId].name}<br/>
//     //     </Link>))
//   const recipe = props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/>)
    
//   // debugger
//   return (
//     <div>
//       <h2>RecipeList<br/></h2>

//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem",}}
//       >
//         {props.savedRecipe.map((recipe) => (
//           <Link
//             style={{ display: "block", margin: "1rem 0" }}
//             to={`/recipes/${recipe.id}`}
//             key={recipe.id}
//           >{recipe.name}
//           </Link>))}
//       </nav>
//       <Outlet/>
//         {/* {recipesList} */}
//         {/* {recipe} */}
//     </div>
//   )
// }

// export default RecipeList


function RecipeList (props) {

  const dispatch = useDispatch();
  const 

  // debugger
    // const recipesList = Object.keys(props.savedRecipe).map((recipeId) => (
    //     <Link key={recipeId} to={`/recipes/${recipeId}`} >
    //         {props.savedRecipe[recipeId].name}<br/>
    //     </Link>))
  const recipe = props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/>)
    
  // debugger
  return (
    <div>
      <h2>RecipeList<br/></h2>

      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",}}
      >
        {props.savedRecipe.map((recipe) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
          >{recipe.name}
          </Link>))}
      </nav>
      <Outlet/>
        {/* {recipesList} */}
        {/* {recipe} */}
    </div>
  )
}

export default RecipeList
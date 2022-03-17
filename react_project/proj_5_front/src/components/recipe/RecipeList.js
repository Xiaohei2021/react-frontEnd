import React from 'react'
import { Link  } from 'react-router-dom'

const RecipeList = (props) => {

  console.log(props)
  // debugger
    const allRecipes = Object.keys(props.savedRecipe).map((recipeId) => (
        <Link key={recipeId.id} to={`/recipes/${recipeId}`} >
            {props.savedRecipe[recipeId].name}<br/>
        </Link>))
  // debugger
  return (
    <div>
        {allRecipes}
        
      <h2>RecipeList<br/></h2>
      
    </div>
  )
}

export default RecipeList
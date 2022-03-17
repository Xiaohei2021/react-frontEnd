import React from 'react'
import { Link  } from 'react-router-dom'

const RecipeList = (props) => {

  console.log(props)
  // debugger
    const recipesList = Object.keys(props.savedRecipe).map((recipeId) => (
        <Link key={recipeId} to={`/recipes/${recipeId}`} >
            {props.savedRecipe[recipeId].name}<br/>
        </Link>))
  // debugger
  return (
    <div>
        <h2>RecipeList<br/></h2>
        {recipesList}
    </div>
  )
}

export default RecipeList
import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({savedRecipe}) => {
// debugger
    const allRecipes = Object.keys(savedRecipe).map((recipeId) => (
        <Link key={recipeId.id} to={`/recipes/${recipeId}`}>
            {savedRecipe.dish[recipeId].name}
        </Link>))

  return (
    <div>
        {allRecipes}
    
    </div>
  )
}

export default RecipeList
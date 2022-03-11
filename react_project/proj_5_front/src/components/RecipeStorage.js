import React from 'react'
import Recipe from './Recipe'

export default function RecipeStorage(props) {
    const recipeDataBase = () => props.recipeDB.map(r => <Recipe key={r.id} recipe={r}/> )
    // debugger
  return (
    <div>
        RecipeStorage
        <ul>
            {recipeDataBase()}
        </ul>
        
    </div>
  )
}

import React from 'react'

export default function RecipeStorage(props) {
    const recipeDataBase = () => props.recipeDB.map(r => <li key={r.id}>{r.name}</li>)
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

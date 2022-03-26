import React from 'react'
import { deleteRecipe } from '../../actions/recipeActions/recipe'
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useOutletContext  } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


 function Recipe() {

  const recipeDB = useOutletContext();
  const { id } = useParams();
  const rec = recipeDB.find(r => r.id === parseInt(id)) 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const rec = recipeDB.find(r => {debugger}) 

  // const ingredients = Object.fromEntries(Object.entries(recipe).filter(([key]) => key.includes('strIngredient')))
  // console.log(rec)

  function handleClick(){
    dispatch(deleteRecipe(rec.id, navigate))
  }

  function handleEdit(){
    navigate("update")
  }

  // debugger
  return (
      <div className='card'>
        <h1>Recipe#:</h1>{id}
        <h1>Name:</h1> {rec.name} 
        <h1>Ingredient:</h1>{rec.ingredient}
        <h1>cooking_Instructions:</h1> {rec.cooking_Instructions}
        <button onClick={ handleClick}>Delete</button>
        <button onClick={ handleEdit }>Edit Recipe</button>
        <Outlet context={recipeDB}/>
      </div>
  
  )
}
export default Recipe

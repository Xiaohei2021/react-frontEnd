import React from 'react'
import { deleteRecipe } from '../../actions/recipeActions/recipe'
// import { connect } from 'react-redux'
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useState} from "react";

import { useOutletContext  } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


// class Recipe extends React.Component {
//   render() {
//   // let params = useParams();
//   // debugger
//     return (
//         <div>
//             {this.props.recipe.name}
//             <button onClick={ () => this.props.deleteRecipe(this.props.recipe.id)}>Delete</button>
//     </div>
//     )
//   }
// }
// export default connect(null, {deleteRecipe})(Recipe)

 function Recipe() {

  const recipeDB = useOutletContext();
  const { id } = useParams();
  const rec = recipeDB.find(r => r.id === parseInt(id)) 
  const navigate = useNavigate();

  // const rec = recipeDB.find(r => {debugger}) 

  // const ingredients = Object.fromEntries(Object.entries(recipe).filter(([key]) => key.includes('strIngredient')))
  const dispatch = useDispatch();
  // console.log(rec)

  const handleClick = (e) => {
    dispatch(deleteRecipe(parseInt(id), navigate))
  }

  const handleEdit = (e) => {
    navigate("update")
  }

  // debugger
  return (
    <div className='card'>
      <h1>Recipe#:</h1>{id}
      <h1>Name:</h1> {rec.name} 
      <h1>Ingredient:</h1>{rec.ingredient}
      <h1>cooking_Instructions:</h1> {rec.cooking_Instructions}
      {/* {props.recipe.ingredient}  */}
      {/* {props.recipe.cooking_Instructions} */}
      <button onClick={ e => handleClick(e)}>Delete</button>
      <button onClick={ e => handleEdit(e)}>Edit Recipe</button>

    </div>
  )
}
// export default connect(null, { deleteRecipe })(Recipe)
export default Recipe

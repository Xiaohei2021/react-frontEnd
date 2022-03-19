import React from 'react'
import { deleteRecipe } from '../../actions/recipeActions/recipe'
// import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useOutletContext  } from 'react-router-dom'

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
  // const rec = recipeDB.find(r => {debugger}) 

  // const ingredients = Object.fromEntries(Object.entries(recipe).filter(([key]) => key.includes('strIngredient')))

  const dispatch = useDispatch();
  console.log(rec)

  // debugger
  return (
    <div>
      <h1>Recipe#:{id}</h1>
      <h1>Name:{rec.name}</h1>  
      <h1>Ingredient:{rec.ingredient}</h1>
      <h1>cooking_Instructions: {rec.cooking_Instructions}</h1>
      {/* {props.recipe.ingredient}  */}
      {/* {props.recipe.cooking_Instructions} */}
      <button onClick={ ()=> dispatch(deleteRecipe(parseInt(id)))}>Delete</button>

    </div>
  )
}
// export default connect(null, { deleteRecipe })(Recipe)
export default Recipe

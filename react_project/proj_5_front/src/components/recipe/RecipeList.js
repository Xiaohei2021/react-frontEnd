import React from 'react'
// import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useOutletContext, Link  } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
// import { fetchSavedRecipe } from '../../actions/recipeActions/recipe'
// import Recipe from './Recipe'


function RecipeList () {

  // const dispatch = useDispatch();
  // const savedRecipe = useSelector(state => state.db.ownRecipe)
  // const navigate = useNavigate();
  const recipeDB = useOutletContext();

  // useEffect(()=> {
  //   dispatch(fetchSavedRecipe())
  // }, [])
  // console.log(savedRecipe)

  // const allRecipes = savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
  // console.log({recipeDB})

    // debugger
  return (
    <div>
      <h2>RecipeList<br/></h2>

      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",}}
      >
        {recipeDB.map((recipe) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
            // onClick ={() => navigate(`/recipes/${recipe.id}`)}
          >{recipe.name} 
          </Link>))}
      </nav>
    </div>
  )
}
export default RecipeList
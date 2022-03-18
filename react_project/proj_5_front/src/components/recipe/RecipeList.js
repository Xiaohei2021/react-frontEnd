import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link  } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { fetchSavedRecipe } from '../../actions/recipeActions/recipe'
import Recipe from './Recipe'


function RecipeList () {

  const dispatch = useDispatch();
  const savedRecipe = useSelector(state => state.db.ownRecipe)
  const navigate = useNavigate();

  useEffect(()=> {
    dispatch(fetchSavedRecipe())
  }, [])
  // console.log(savedRecipe)

  // const allRecipes = savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
  
    // debugger
  return (
    <div>
      <h2>RecipeList<br/></h2>

      {savedRecipe.map((recipe) => {
        return(
          <div onClick={()=> {navigate(`/recipes/${recipe.id}`)}}>
            <h2>{recipe.name}</h2>
          </div>
        )
      })}

      {/* <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",}}
      >
        {savedRecipe.map((recipe) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/recipes/list/${recipe.id}`}
            key={recipe.id}
          >{recipe.name} 
          </Link>))}
      </nav> */}
      {/* <Outlet /> */}
        {/* {allRecipes} */}
    </div>
  )
}
export default RecipeList
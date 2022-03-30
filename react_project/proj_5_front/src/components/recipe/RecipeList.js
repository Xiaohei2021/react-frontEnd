import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useOutletContext, Link  } from 'react-router-dom'
import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import { fetchSavedRecipe } from '../../actions/recipeActions/recipe'
import { fetchRecipe } from "../../actions/queryActions/query"
// import Recipe from './Recipe'


function RecipeList () {

  const dispatch = useDispatch();
  const recipeDB = useSelector(state => state.db.ownRecipe);
  const [query, setQuery] = useState("");

  const[queryList, setQueryList] =  useState(recipeDB)
  
  // const navigate = useNavigate();
  // const recipeDB = useOutletContext();

  useEffect(()=> {
    dispatch(fetchSavedRecipe())
  }, [])
  // console.log(savedRecipe)

  // const allRecipes = savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
  console.log({recipeDB})

    function handleSubmit(e){
      e.preventDefault();
      const target = recipeDB.filter(recipe => recipe.name.includes(query))
      setQueryList(target) 
      
    }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} >
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
        <input type="submit"/>
      </form>

      <h2>RecipeList<br/></h2>

      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",}}
      >
        {queryList.map((recipe) => (
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
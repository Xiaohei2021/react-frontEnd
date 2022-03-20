import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useOutletContext  } from 'react-router-dom'
import { saveTheRecipe } from '../../actions/recipeActions/recipe'

export default function QueryDish() {

    const queryDB = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const result = queryDB.find(s => s.idMeal === parseInt(id)) 
    const result = queryDB.find(s => s.idMeal === id) 
    const ingredients = Object.fromEntries(Object.entries(result).filter(([key]) => key.includes('strIngredient')))
    const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])})
    const filteredIngredients = data.filter(i => i.length && i!== null).join(",")
    const handleClick = (e) => {
      dispatch(saveTheRecipe({name:result.strMeal, ingredient: filteredIngredients, cooking_Instructions:result.strInstructions}, navigate))
    }

  return (
    <div className='card'>
      <h5>Recipe#: {id}</h5>
      <h4>Name: {result.strMeal}</h4> 
      <img src={result.strMealThumb} alt={result.strMeal} className="img"/>
      <h3>Ingredient:</h3>{filteredIngredients}
      <p>cooking_Instructions:{result.strInstructions}</p> 
      <button onClick={ e => handleClick(e)}>Save</button>

    </div>
  )
}

import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useOutletContext  } from 'react-router-dom'
import { saveTheRecipe } from '../../actions/recipeActions/recipe'

function Dish() {

    const surpriseDB = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    // const surprise = surpriseDB.find(s => s.idMeal === parseInt(id)) 
    const surprise = surpriseDB.find(s => s.idMeal === id) 
    const dispatch = useDispatch();
  
    const ingredients = Object.fromEntries(Object.entries(surprise).filter(([key]) => key.includes('strIngredient')))
    const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])})
    const filteredIngredients = data.filter(i => i.length && i!== null).join(",")
  
    const handleClick = (e) => {
      dispatch(saveTheRecipe({name:surprise.strMeal, ingredient: filteredIngredients, cooking_Instructions:surprise.strInstructions}, navigate))
    }
    // const surprise = surpriseDB.find(r => {debugger}) 
  
    // console.log(surprise)
    // console.log(data)
    return (
      <div className='card'>
        <div className='img'>
        <img src={surprise.strMealThumb} alt={surprise.strMeal} />
        <h5>Recipe#: {id}</h5>
        <h4>Name: {surprise.strMeal}</h4> 
        <h3>Ingredient:</h3>{filteredIngredients}
        <h3>cooking_Instructions:</h3> {surprise.strInstructions}<br/>
        <button onClick={ e => handleClick(e)}>Save</button>
        </div>
        
      </div>
    )
  }
  export default Dish
  
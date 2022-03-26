import React from 'react'
// import { connect } from 'react-redux'
import { createOwnRecipe } from '../../actions/recipeActions/recipe'
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { useDispatch } from 'react-redux';



function RecipeInput() {

    const [name, setName] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [cooking_Instructions, setCooking_Instructions] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createOwnRecipe({name:name, ingredient: ingredient, cooking_Instructions:cooking_Instructions}, navigate))
        setName("");
        setIngredient("");
        setCooking_Instructions("");
    }

    return (
      <div>
          <h4>Please enter the recipe information below</h4>
        <form onSubmit={ e => handleSubmit(e)}>
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient' 
                name="name"
                value={name}
                onChange={ e => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient'
                name="ingredient"
                value={ingredient}
                onChange={e=> setIngredient(e.target.value)}
            />
            <input 
                type="textarea" 
                placeholder='Enter the recipe instructions'
                name="cooking_Instructions"
                value={cooking_Instructions}
                onChange={e=> setCooking_Instructions(e.target.value)}
            />
            <input type="submit" />
        </form>
          
    </div>
    )
  }

export default RecipeInput

import React from 'react'
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useOutletContext, useParams, useNavigate  } from 'react-router-dom'
import { editTheRecipe } from '../../actions/recipeActions/recipe';


export default function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recipeDB = useOutletContext();
    const recipe = recipeDB.find(r => r.id === parseInt(id)) 
    
    
    const [name, setName] = useState(recipe.name);
    const [ingredient, setIngredient] = useState(recipe.ingredient);
    const [cooking_Instructions, setCooking_Instructions] = useState(recipe.cooking_Instructions);

    // console.log(recipe)

    function handleEdit(e){
        e.preventDefault();
        dispatch(editTheRecipe({id: id, name:name, ingredient: ingredient, cooking_Instructions:cooking_Instructions}, navigate) )
    }

  return (
    <div>
        <form onSubmit={ e => handleEdit(e)}>
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient' 
                value={name}
                onChange={ e => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient'
                value={ingredient}
                onChange={e=> setIngredient(e.target.value)}

            />
            <input 
                type="textarea" 
                placeholder='Enter the recipe instructions'
                value={cooking_Instructions}
                onChange={e=> setCooking_Instructions(e.target.value)}
            />
            <input type="submit" />
        </form>

    </div>
  )
}

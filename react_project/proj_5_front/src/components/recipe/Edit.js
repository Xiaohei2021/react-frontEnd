import React from 'react'
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useOutletContext, useParams  } from 'react-router-dom'
import { editTheRecipe } from '../../actions/recipeActions/recipe';


export default function Edit() {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recipeDB = useOutletContext();
    const recipe = recipeDB.find(r => r.id === parseInt(id)) 

    console.log(recipe)

    function handleEdit(){

    }

  return (
    <div>
        <form onSubmit={ e => handleEdit(e)}>
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient' 
                name="name"
                value={name}
                // value={this.state.name}
                onChange={ e => setName(e.target.value)}
                // onchange={ (e) => this.setState({query: e.target.value} }
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

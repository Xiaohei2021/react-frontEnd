import React from 'react'

import { useDispatch } from 'react-redux';

import { useOutletContext  } from 'react-router-dom'
import { editTheRecipe } from '../../actions/recipeActions/recipe';
import { useNavigate } from "react-router-dom";

export default function Edit() {



  return (
    <div>
        <form onSubmit={ e => handleSubmit(e)}>
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

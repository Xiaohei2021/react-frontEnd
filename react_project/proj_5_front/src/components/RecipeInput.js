import React, { Component } from 'react'

export default class RecipeInput extends Component {

    state={
        // recipeName:"",
        recipeIngredient: "",
        recipeInstruction: ""
    }
  render() {
    return (
      <div>
          RecipeInput
        <form>
            <input type="text" placeholder='Enter the recipe ingredient'/>
            <input type="text" placeholder='Enter the recipe instructions'/>
            <input type="submit"/>
        </form>
          
    </div>
    )
  }
}

import React, { Component } from 'react'

export default class RecipeInput extends Component {

    state={
        recipeName:"",
        recipeIngredient: "",
        recipeInstruction: ""
    }
  render() {
    return (
      <div>
          RecipeInput
        <form>
            <input/>
            <input/>


        </form>
          
    </div>
    )
  }
}

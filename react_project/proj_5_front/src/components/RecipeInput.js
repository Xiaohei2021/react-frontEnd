import React, { Component } from 'react'

export default class RecipeInput extends Component {

    state={
        recipeName:"",
        recipeIngredient: "",
        recipeInstruction: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


  render() {
    return (
      <div>
          RecipeInput
        <form>
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient' 
                name="recipeName"
                value={this.state.recipeName}
                onChange={this.handleChange}
            />
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient'
                name="recipeName"
                value={this.state.recipeIngredient}
                onChange={this.handleChange}

            />
            <input 
                type="text" 
                placeholder='Enter the recipe instructions'
                name="recipeName"
                value={this.state.recipeInstruction}
                onChange={this.handleChange}
            />
            <input type="submit"/>
        </form>
          
    </div>
    )
  }
}

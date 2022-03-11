import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOwnRecipe } from '../actions/actions'

class RecipeInput extends Component {

    state={
        name:"",
        ingredient: "",
        cooking_Instructions: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createOwnRecipe(this.state)
        this.setState({ 
            name:"",
            ingredient: "",
            cooking_Instructions: ""
        })
    }

  render() {
    return (
      <div>
          RecipeInput
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient' 
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            <input 
                type="text" 
                placeholder='Enter the recipe ingredient'
                name="ingredient"
                value={this.state.ingredient}
                onChange={this.handleChange}

            />
            <input 
                type="text" 
                placeholder='Enter the recipe instructions'
                name="cooking_Instructions"
                value={this.state.cooking_Instructions}
                onChange={this.handleChange}
            />
            <input type="submit"/>
        </form>
          
    </div>
    )
  }
}

export default connect(null, { createOwnRecipe })(RecipeInput)

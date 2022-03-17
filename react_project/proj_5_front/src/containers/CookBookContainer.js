import React, { Component } from 'react'
import { Routes, Route, Link, Outlet  } from 'react-router-dom';

import Recipe from '../components/recipe/Recipe'
import { connect } from 'react-redux'
import { fetchSavedRecipe }from "../actions/recipeActions/recipe"
// import RecipeInput from '../components/recipe/RecipeInput';
import RecipeList from '../components/recipe/RecipeList'

class CookBookContainer extends Component {

    componentDidMount() { 
      this.props.fetchdata(); 
    }

  render(){

    // const allRecipes = this.props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
    return (
      <div>
          {/* <RecipeInput/><hr/> */}
          <RecipeList savedRecipe = {this.props.savedRecipe} />
          <h1>Its Working</h1>
          {/* {allRecipes} */}
          {/* <Route path={":recipeId"} element={<Recipe />} /> */}

          {/* <nav>
            <Link to="new">Create New</Link>
          </nav>
          
          <Outlet/> */}
          {/* <Route path={`${match.url}/:recipeId`} element={<Recipe />} /> */}
          

      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchdata: () => dispatch(fetchSavedRecipe()),
  }
}

function mapStateToProps(state){
  // console.log(state)
  return{
    savedRecipe: state.db.ownRecipe
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookBookContainer)

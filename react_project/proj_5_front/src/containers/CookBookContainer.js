import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';

import Recipe from '../components/recipe/Recipe'
import { connect } from 'react-redux'
import { fetchSavedRecipe }from "../actions/recipeActions/recipe"
import RecipeInput from '../components/recipe/RecipeInput';
import RecipeList from '../components/recipe/RecipeList'

class CookBookContainer extends Component {

    componentDidMount() { 
      this.props.fetchdata(); 
    }

  render(){
    // const allRecipes = this.props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
    // console.log(this.props)
    return (
      <div>

          <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="new">Create New Recipe</Link> |{""}
            <Link to=":recipeId">See a recipeActions</Link> |{""}
          </nav>
          <Outlet/>
          
          {/* <RecipeInput/><hr/> */}
          <RecipeList savedRecipe = {this.props.savedRecipe} />
          {/* {allRecipes} */}
          {/* <Outlet/> */}
       
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

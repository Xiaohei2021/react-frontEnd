import React, { Component } from 'react'
// import Recipe from '../components/recipe/Recipe'
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import { fetchSavedRecipe }from "../actions/actions"
import RecipeInput from '../components/recipe/RecipeInput';
import RecipeList from '../components/recipe/RecipeList'

class CookBookContainer extends Component {

    componentDidMount() { 
      this.props.fetchdata(); 
    }

  render(){
    // const allRecipes = this.props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
    return (
      <div>
          <RecipeInput/><hr/>
          <RecipeList savedRecipe = {this.props.savedRecipe}/>
          {/* {allRecipes} */}
          <Route path={":recipeId"} element={<RecipeList />} />
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

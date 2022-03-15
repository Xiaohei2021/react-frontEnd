import React, { Component } from 'react'
import Recipe from '../components/Recipe'
import { connect } from 'react-redux'
import { fetchSavedRecipe }from "../actions/actions"
import RecipeInput from '../components/RecipeInput';

class RecipeStorage extends Component {

    componentDidMount() { 
      this.props.fetchdata(); 
    }

  render(){
    const allRecipes = this.props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )

    // debugger
    return (
      <div>
          <RecipeInput/><hr/>
          {allRecipes}
          
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeStorage)

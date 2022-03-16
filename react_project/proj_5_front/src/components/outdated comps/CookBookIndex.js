import React, { Component } from 'react'
import FoodSearch from '../components/query/FoodSearch'
import FoodList from '../components/surprises/SurpriseList'
import { connect } from 'react-redux'
import {fetchRecipe, fetchSurprise } from '../actions/actions'
// import RecipeStorage from '../components/RecipeStorage'

class CookBookIndex extends Component {

  handleSurprise() {
    this.props.fetchSurprise();
  }

  handleQuery=(query)=>{
    this.props.fetchRecipe(query);
  }

  render() {
    // console.log(this.props.recipes)
    // console.log(this.props)
    // const backEnd = () => this.props.savedRecipe.map(r => <li key={r.id}>{r.name}<button onClick={this.handleDelete}>Delete</button></li>)
    // debugger
    return (
      <div>
        <h4>What do you have in mind today?</h4>
        
        <FoodSearch fetchRecipe={this.handleQuery} />
        <FoodList surprises={this.props.recipes} queryResult={this.props.targetRecipe}/>
        {/* <RecipeInput /> */}
        {/* <RecipeStorage recipeDB={this.props.savedRecipe}/> */}
        {/* <ul>
            {backEnd()}
        </ul> */}
       
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch) {
    return {
      // fetchdata: () => dispatch(fetchSavedRecipe()),
      fetchSurprise: () => dispatch(fetchSurprise()),
      fetchRecipe: (query) => dispatch(fetchRecipe(query))
    }
  }

  function mapStateToProps(state){
    // console.log(state)
    return{
      recipes: state.surprise.randomRecipes,
      targetRecipe: state.query.queryResult,
      // savedRecipe: state.db.ownRecipe
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CookBookIndex)

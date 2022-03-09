import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import FoodSearch from '../components/FoodSearch'
import FoodList from '../components/FoodList'
import { connect } from 'react-redux'
import {fetchSurprise } from '../actions/actions'
import FavoriteList from '../components/FavoriteList'


class CookBookIndex extends Component {


  state={
    queriedDish: ""
}

  handleSurprise() {
    this.props.fetchSurprise();
  }

  render() {
    console.log(this.props.recipes)
    // const surprises = this.props.recipes.meals.map((recipe) => (<li key={recipe.idMeal}>{recipe.strMeal}</li>))
    // debugger
    return (
      <div>
        <h4>What do you have in mind today?</h4>
        <button onClick={(e)=> this.handleSurprise(e)}>Surprise Me!</button>
        
          <Link to="/">Home</Link>
          <Link to="favorite">Favorites</Link>

          <Routes>
            <Route path="/favorite" element={<FavoriteList/>} /> 
          </Routes> 
        {/* <FoodSearch fetchDishes={this.fetchDishes} /> */}
        <FoodList surprises={this.props.recipes}/>
        <ul>
          {/* {surprises} */}
        </ul>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch) {
    return {
      fetchSurprise: () => dispatch(fetchSurprise())
    }
  }

  function mapStateToProps(state){
    return{
      recipes: state.randomRecipes
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CookBookIndex)

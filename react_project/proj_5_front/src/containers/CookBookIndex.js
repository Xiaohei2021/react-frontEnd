// import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
// import FoodSearch from '../components/FoodSearch'
import FoodList from '../components/FoodList'
import { connect } from 'react-redux'
import {fetchSurprise } from '../actions/actions'


class CookBookIndex extends Component {

  handleSurprise() {
    this.props.fetchSurprise();
  }

  render() {
    // const surprises = this.props.recipes.meals.map((recipe) => (<li key={recipe.idMeal}>{recipe.strMeal}</li>))
    // debugger
    return (
      <div>
{/* 
      <Link to="/">Home</Link>
      <Link to="favorite">Favorites</Link>
      <Routes>
        <Route path="/favorite" element={<FavoriteList/>} /> 
      </Routes>  */}
        <h4>What do you have in mind today?</h4>
        <button onClick={(e)=> this.handleSurprise(e)}>Surprise Me!</button>
        {/* <FoodSearch fetchDishes={this.fetchDishes} /> */}
        {/* <FoodList queryList={this.state.searchData.meals}/> */}
        <FoodList surprises={this.props.recipes}/>
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

// import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import FoodSearch from '../components/FoodSearch'
import FoodList from '../components/FoodList'
import { connect } from 'react-redux'
import {fetchRecipe, fetchSurprise } from '../actions/actions'
import RecipeInput from '../components/RecipeInput'
// import FavoriteList from '../components/FavoriteList'



class CookBookIndex extends Component {


//   state={
//     queriedDish: []
// }

  handleSurprise() {
    this.props.fetchSurprise();
  }

  handleQuery=(query)=>{
    this.props.fetchRecipe(query);
  }

  render() {
    // console.log(this.props.recipes)
    console.log(this.props)

    // debugger
    return (
      <div>
        <h4>What do you have in mind today?</h4>
        <button onClick={(e)=> this.handleSurprise(e)}>Surprise Me!</button>
          {/* <Link to="/">Home</Link>
          <Link to="favorite">Favorites</Link>
          <Routes>
            <Route path="/favorite" element={<FavoriteList/>} /> 
          </Routes>  */}
        <FoodSearch fetchRecipe={this.handleQuery} />
        <FoodList surprises={this.props.recipes} queryResult={this.props.targetRecipe}/>
        <RecipeInput />
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch) {
    return {
      fetchSurprise: () => dispatch(fetchSurprise()),
      fetchRecipe: (query) => dispatch(fetchRecipe(query))
    }
  }

  function mapStateToProps(state){
    // console.log(state)
    return{
      
      recipes: state.surprise.randomRecipes,
      targetRecipe: state.query.queryResult
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CookBookIndex)

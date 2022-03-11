// import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import FoodSearch from '../components/FoodSearch'
import FoodList from '../components/FoodList'
import { connect } from 'react-redux'
import {fetchRecipe, fetchSurprise, fetchSavedRecipe } from '../actions/actions'
import RecipeInput from '../components/RecipeInput'

class CookBookIndex extends Component {

  componentDidMount() { 
    this.props.fetchdata(); 
  }

  handleSurprise() {
    this.props.fetchSurprise();
  }

  handleQuery=(query)=>{
    this.props.fetchRecipe(query);
  }

  render() {
    // console.log(this.props.recipes)
    // console.log(this.props)
    const backEnd = () => this.props.savedRecipe.map(r => <li key={r.id}>{r.name}</li>)
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
       
       <ul>
         {backEnd()}
      </ul>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch) {
    return {
      fetchdata: () => dispatch(fetchSavedRecipe()),
      fetchSurprise: () => dispatch(fetchSurprise()),
      fetchRecipe: (query) => dispatch(fetchRecipe(query))
    }
  }

  function mapStateToProps(state){
    // console.log(state)
    return{
      
      recipes: state.surprise.randomRecipes,
      targetRecipe: state.query.queryResult,
      savedRecipe: state.db.ownRecipe
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CookBookIndex)

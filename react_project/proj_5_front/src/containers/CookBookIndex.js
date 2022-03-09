// import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import FoodSearch from '../components/FoodSearch'
import FoodList from '../components/FoodList'


export default class CookBookIndex extends Component {

  state = {
    searchData :[]
  }

  handleSurprise = (e) => {
    
  }

  fetchDishes = (query) => {
    fetch(`https://themealdb.p.rapidapi.com/search.php?s=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "da4f016a88msh0f102f0fca24bfcp1fd784jsn2faf65ebf551"}
    })
    .then(response => response.json())
    .then(data => this.setState( {searchData:data} ))
    .catch(err => {
    console.error(err);
    });
  }

  render() {
    return (
      <div>
{/* 
      <Link to="/">Home</Link>
      <Link to="favorite">Favorites</Link>
      <Routes>
        <Route path="/favorite" element={<FavoriteList/>} /> 
      </Routes>  */}
        <h4>What do you have in mind today?</h4>
        <button onClick={this.handleSurprise}>Surprise Me!</button>
        <FoodSearch fetchDishes={this.fetchDishes} />
        <FoodList queryList={this.state.searchData.meals}/>
      </div>
    )
  }
}

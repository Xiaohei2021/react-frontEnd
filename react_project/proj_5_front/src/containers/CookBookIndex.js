// import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import FoodSearch from '../components/FoodSearch'


export default class CookBookIndex extends Component {
  render() {
    return (
      <div>
{/* 
      <Link to="/">Home</Link>
      <Link to="favorite">Favorites</Link>
      <Routes>
        <Route path="/favorite" element={<FavoriteList/>} /> 
      </Routes>  */}

        <FoodSearch />
      </div>
    )
  }
}

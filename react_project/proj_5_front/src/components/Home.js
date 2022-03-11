import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import CookBookIndex from '../containers/CookBookIndex';
import RecipeInput from './RecipeInput';


export default function Home() {
  return (
    <div>
        <Link to="/"> Home </Link><br/>
        <Link to="/recipes"> Saved Recipes </Link><br/>
        <Link to="/recipes/new"> Create Own Recipes </Link><br/>

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/recipes" element={< CookBookIndex/>} />
            <Route exact path="/recipes/new" element={< RecipeInput/>} />  
        </Routes> 

        {/* <CookBookIndex /> */}
        
    </div>
  )
}

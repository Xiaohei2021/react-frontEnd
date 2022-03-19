import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// import Navbar from '../Navbar';

export default function Home() {

  let navigate = useNavigate();
  
  function handleCreate(){
    navigate("/recipes/new");
  }

  function handleIndex(){
    navigate("/home")
  }

  return (
    <div>
      {/* <Navbar /> */}
      <h1>What is your tummy yearning for on this fine day?</h1>

      <button onClick={handleIndex}>CookBook Index </button><br/><br/> 
      <button onClick={handleCreate}>Create Own Recipe </button><br/><br/>

      <nav
      style={{
        paddingBottom: "1rem",
      }}>

      <Link to="/recipes">Recipe Index</Link> |{""}
      <Link to=""></Link>
      <Link to="/surprises">Get Some Inspiration</Link> |{""}
      <Link to="/query">Search for a Specific Recipe</Link> |{""}
      <Link to=""></Link>
    </nav>
    </div>
  )
}

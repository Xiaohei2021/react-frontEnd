import React from 'react'
import { useNavigate } from "react-router-dom";

// import Navbar from '../Navbar';

export default function Home() {

  let navigate = useNavigate();
  
  function handleCreate(){
    navigate("/recipes/new");
  }

  function handleIndex(){
    navigate("/recipes")
  }

  return (
    <div>
      {/* <Navbar /> */}
      {/* <h1>What is your tummy yearning for on this fine day?</h1> */}

      <p>Click this buttont to <button onClick={handleIndex}>See The Recipe Index </button><br/><br/> </p>
      <p>Click this button to <button onClick={handleCreate}>Create Own Recipe </button><br/></p>
      {/* <nav
      style={{
        paddingBottom: "1rem",
      }}>

      <Link to="/recipes">Recipe Index</Link> |{""}
      <Link to=""></Link>
      <Link to="/surprises">Get Some Inspiration</Link> |{""}
      <Link to="/query">Search for a Specific Recipe</Link> |{""}
      <Link to=""></Link>
    </nav> */}
    </div>
  )
}

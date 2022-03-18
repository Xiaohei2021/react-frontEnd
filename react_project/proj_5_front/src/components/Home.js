import React from 'react'
import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}

      <nav
      style={{
        borderBottom: "solid 1px",
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

import { NavLink } from "react-router-dom"
import React, { Component } from 'react'


// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'green',
//     textDecoration: 'none',
//     color: 'white',
// }


export default class Navbar extends Component {
  render() {
    return (
        <div>
            
            <NavLink
                to="/home"
                style={
                    ({ isActive }) => isActive?{ color: '#fff', background: '#008917',}:{ color: '#545e6f', background: '#fff' }
                }
                className="nav-bar"
            >Home
            </NavLink>

            <NavLink
                to="/recipes"
                style={
                    ({ isActive }) => isActive?{ color: '#fff', background: '#008917',}:{ color: '#545e6f', background: '#fff' }
                }
                className="nav-bar"
                >Saved Recipes
            </NavLink>




            <NavLink
                to="/recipes/new"
                style={
                    ({ isActive }) => isActive?{ color: '#fff', background: '#008917',}:{ color: '#545e6f', background: '#fff' }
                }
                className="nav-bar"
                >Create Own Recipes
            </NavLink>
        </div>)
  }
}

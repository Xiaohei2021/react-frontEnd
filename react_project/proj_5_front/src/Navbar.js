import { NavLink } from "react-router-dom"
import React, { Component } from 'react'

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
                >All Recipes
            </NavLink>

            <NavLink
                to="/surprises"
                style={
                    ({ isActive }) => isActive?{ color: '#fff', background: '#008917',}:{ color: '#545e6f', background: '#fff' }
                }
                className="nav-bar"
                >Get Some Inspiration
            </NavLink>

            <NavLink
                to="/query"
                style={
                    ({ isActive }) => isActive?{ color: '#fff', background: '#008917',}:{ color: '#545e6f', background: '#fff' }
                }
                className="nav-bar"
                >Search for a Specific Recipe
            </NavLink>

            <NavLink
                to="/recipes/new"
                style={
                    ({ isActive }) => isActive?{ color: '#fff', background: '#008917',}:{ color: '#545e6f', background: '#fff' }
                }
                className="nav-bar"
                >Create a Recipe
            </NavLink>


        </div>)
  }
}

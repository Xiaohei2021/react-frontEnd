import { NavLink } from "react-router-dom"
import React, { Component } from 'react'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'gray',
    textDecoration: 'none',
    color: 'red',
}


export default class Navbar extends Component {
  render() {
    return (
        <div>
            <NavLink
                to="/home"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={link}
                /* add prop for activeStyle */
                activeStyle={{background: 'white'}}
            >Home
            </NavLink>

            <NavLink
                to="/recipes"
                exact
                style={link}
                activeStyle={{background: 'white'}}
                >Saved Recipes
            </NavLink>




            <NavLink
                to="/recipes/new"
                exact
                style={link}
                activeStyle={{background: 'white'}}
                >Create Own Recipes
            </NavLink>
        </div>)
  }
}

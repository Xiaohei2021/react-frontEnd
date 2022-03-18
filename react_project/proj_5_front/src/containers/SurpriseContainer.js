import React, { Component } from 'react'
import FoodList from '../components/surprises/SurpriseList'
import { connect } from 'react-redux'
import {fetchSurprise } from '../actions/surpriseActions/surprise'
import { Outlet, Link } from 'react-router-dom';


class SurpriseContainer extends Component {

    handleSurprise() {
        this.props.fetchSurprise();
      }

  render() {
    return (
        <div>
          <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="/home">Home</Link> |{""}
            <Link to="/recipes">All Recipes</Link> |{""}
            <Link to=""></Link>
            <Link to="/surprises">Get Some Inspiration</Link> |{""}
            <Link to="/query">Search for a Specific Recipe</Link> |{""}
            <Link to=""></Link>
          </nav>




            <h3>Lets see which dishes our luck will bring us today.</h3>
            <br/>
            {/* <br/> */}
            <button onClick={(e)=> this.handleSurprise(e)}>Surprise Me!</button>
            <FoodList surprises={this.props.recipes} queryResult={this.props.targetRecipe}/>
        </div>
    )
  }
}

function mapStateToProps(state){
    return{
        recipes: state.surprise.randomRecipes,
      }
}
export default connect(mapStateToProps, { fetchSurprise })(SurpriseContainer)
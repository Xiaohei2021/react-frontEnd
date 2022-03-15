import React, { Component } from 'react'
import FoodList from '../components/FoodList'
import { connect } from 'react-redux'
import {fetchSurprise } from '../actions/actions'


class SurpriseContainer extends Component {

    handleSurprise() {
        this.props.fetchSurprise();
      }


  render() {
    return (
        <div>
            SurpriseContainer
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
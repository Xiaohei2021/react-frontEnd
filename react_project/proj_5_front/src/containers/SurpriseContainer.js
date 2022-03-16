import React, { Component } from 'react'
import FoodList from '../components/surprises/SurpriseList'
import { connect } from 'react-redux'
import {fetchSurprise } from '../actions/surpriseActions/surprise'


class SurpriseContainer extends Component {

    handleSurprise() {
        this.props.fetchSurprise();
      }

  render() {
    return (
        <div>
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
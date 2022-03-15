import React, { Component } from 'react'
import {fetchSavedRecipe  } from '../actions/actions'

class QueryContainer extends Component {

 handleQuery=(query)=>{
    this.props.fetchRecipe(query);
  }

  render() {
    return (
        <div>
            QueryContainer

            <FoodSearch fetchRecipe={this.handleQuery} />

        </div>
    )
  }
}

export default connect(null, {fetchSavedRecipe})(QueryContainer)
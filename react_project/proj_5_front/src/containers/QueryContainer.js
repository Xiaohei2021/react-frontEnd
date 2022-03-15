import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/actions'
import QueryInput from '../components/query/QueryInput'

class QueryContainer extends Component {

 handleQuery=(query)=>{
    this.props.fetchRecipe(query);
  }

  render() {
    return (
        <div>
            
            <h3>Enter the name of the ingredient or dish you are craving for.</h3>
            <QueryInput fetchRecipe={this.handleQuery} />

        </div>
    )
  }
}

export default connect(null, { fetchRecipe })(QueryContainer)
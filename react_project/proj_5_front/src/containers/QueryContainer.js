import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/queryActions/query'
import QueryInput from '../components/query/QueryInput'
import QueryList from '../components/query/QueryList'
import { Outlet, Link } from 'react-router-dom';


class QueryContainer extends Component {

 handleQuery=(query)=>{
    this.props.fetchRecipe(query);
  }

  render() {
    // console.log(this.props)
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

            <h3>Enter the name of the ingredient or dish you are craving for.</h3>
            <QueryInput fetchRecipe={this.handleQuery} />
            <QueryList fetchedRecipe={this.props.fetchedRecipe} />
  
        </div>
    )

 



  }
}
function mapStateToProps(state){
    return{
        fetchedRecipe: state.query.queryResult,
    }
}
export default connect(mapStateToProps, { fetchRecipe })(QueryContainer)
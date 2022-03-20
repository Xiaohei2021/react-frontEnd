// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import QueryInput from '../components/query/QueryInput'
// import QueryList from '../components/query/QueryList'
import { fetchRecipe } from '../actions/queryActions/query'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react'
import React from 'react'
import { useNavigate } from "react-router-dom";

import {useState} from "react";

// class QueryContainer extends Component {
//  handleQuery=(query)=>{
//     this.props.fetchRecipe(query);
//   }
//   render() {
//     // console.log(this.props)
//     return (
//         <div>
//           {/* <nav
//             style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}>
//             <Link to="/home">Home</Link> |{""}
//             <Link to="/recipes">Recipe Index</Link> |{""}
//             <Link to=""></Link>
//             <Link to="/querys">Get Some Inspiration</Link> |{""}
//             <Link to=""></Link>
//             </nav> */}
//             <h3>Enter the name of the ingredient or dish you are craving for.</h3>
//             <QueryInput fetchRecipe={this.handleQuery} />
//             <QueryList fetchedRecipe={this.props.fetchedRecipe} />
//         </div>
//     )
//   }
// }
// function mapStateToProps(state){
//     return{
//         fetchedRecipe: state.query.queryResult,
//     }
// }
// export default connect(mapStateToProps, { fetchRecipe })(QueryContainer)


 function QueryContainer() {

  // const dispatch = useDispatch();
  const queryDB = useSelector(state => state.query.queryResult)
  
  // useEffect( ()=> {
  //   dispatch( fetchRecipe() )}, [])

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    dispatch(fetchRecipe(query))
    setQuery("")

    console.log(queryDB)
  }

  return (
    <div> 
      <h5>Which dish do you have in mind for today?</h5>

      <form onSubmit={e => handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Enter the name of the dish"
          value = {query}
          onChange={e => setQuery(e.target.value)}   
        />
        <input type="submit" />
      </form>

      {/* <nav style={{
            // borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="search">Search for a Recipe</Link> |{""}
            <Link to="list">See All Recipes</Link> |{""}
      </nav> */}

      <ol>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",}}
      >
        {queryDB.map((query, index) => (
          <li key={query.strMeal}>
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/query/${query.idMeal}`}
              key={index}
            >
              {query.strMeal} 
            </Link>
          </li>))
        }
      </nav>
      </ol>


          <Outlet /*context={ QueryDB }*/ /> 


    </div>
  )
}
export default QueryContainer
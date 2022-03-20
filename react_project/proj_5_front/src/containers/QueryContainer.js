// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import QueryInput from '../components/query/QueryInput'
// import QueryList from '../components/query/QueryList'
import { fetchRecipe } from '../actions/queryActions/query'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react'
import React from 'react'


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
//             <Link to="/surprises">Get Some Inspiration</Link> |{""}
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
  // const QueryDB = useSelector(state => state.query.queryResult)
  
  // useEffect( ()=> {
  //   dispatch( fetchRecipe() )}, [])

  return (
    <div>
      <nav style={{
            // borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="home">Home</Link> |{""}
            <Link to="list">See All Recipes</Link> |{""}
            <Link to="search">Search for a Recipe</Link> |{""}

          </nav>
         {/* { recipeDB.map(r => <li key={r.id} recipe={r}>{r.name}</li>)}  */}
          <Outlet /*context={ QueryDB }*/ /> 


    </div>
  )
}
export default QueryContainer
// import React, { Component } from 'react'
import React from 'react'

// import FoodList from '../components/surprises/SurpriseList'
// import { connect } from 'react-redux'
import {fetchSurprise } from '../actions/surpriseActions/surprise'
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


// class SurpriseContainer extends Component {

//     handleSurprise() {
//         this.props.fetchSurprise();
//       }

//   render() {
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
//             <Link to="/query">Search for a Specific Recipe</Link> |{""}
//             <Link to=""></Link>
//           </nav> */}

//             <h3>Lets see which dishes our luck will bring us today.</h3>
//             <br/>
//             {/* <br/> */}
//             <button onClick={(e)=> this.handleSurprise(e)}>Surprise Me!</button>
//             <FoodList surprises={this.props.recipes} queryResult={this.props.targetRecipe}/>
//         </div>
//     )
//   }
// }

// function mapStateToProps(state){
//     return{
//         recipes: state.surprise.randomRecipes,
//       }
// }
// export default connect(mapStateToProps, { fetchSurprise })(SurpriseContainer)


export default function SurpriseContainer() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const surpriseDB = useSelector(state => state.surprise.randomRecipes)
 
  function handleSurprise(){
    navigate("list")
  }

  useEffect( ()=> {
    dispatch( fetchSurprise())}, [])

  // debugger
  // console.log(surpriseDB)

  return (
    <div>

      {/* {surpriseDB.map(s => {})} */}

    <button onClick={handleSurprise}>Surprise me!!!</button>

      {/* <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="list">Surprise Me!</Link>
          </nav> */}
         {/* {/* { recipeDB.map(r => <li key={r.id} recipe={r}>{r.name}</li>)}  */}
        <Outlet context={ surpriseDB }/>  
    </div>
  )
}

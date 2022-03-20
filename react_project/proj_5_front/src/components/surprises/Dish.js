// import React, { Component } from 'react'
// import { connect } from 'react-redux'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useOutletContext  } from 'react-router-dom'
import { saveTheRecipe } from '../../actions/recipeActions/recipe'
// 
// class Dish extends Component {

//   // handleSave = () => {
//   //   const data = {
//   //     name: this.props.dish.strMeal,
//   //     ingredients: this.props.ingredients,
//   //     cooking_Instructions: this.props.dish.strInstructions
//   //   }
//   //   this.props.saveTheRecipe(data)
//     // debugger
//   // }

//   render() {
//     return (
//       <div>
    
//           {/* <h4>{this.props.dish.strMeal}</h4>
//           <img src={this.props.dish.strMealThumb} alt={this.props.dish.strMeal}/><br/>
//           {this.props.ingredients}<br/> 
//           {this.props.dish.strInstructions}<br/>
//           <button onClick={this.handleSave}>Save Recipe</button><hr/> */}
//         {/* {ingredient}  */}
       
//         {/* {console.log(this.state)} */}
//         {/* {data} */}

//       </div>
//     )
//   }
// }
// export default connect(null, { saveTheRecipe })(Dish)


function Dish() {

  const surpriseDB = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  // const surprise = surpriseDB.find(s => s.idMeal === parseInt(id)) 
  const surprise = surpriseDB.find(s => s.idMeal === id) 
  const dispatch = useDispatch();

  const ingredients = Object.fromEntries(Object.entries(surprise).filter(([key]) => key.includes('strIngredient')))
  const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])})
  const filteredIngredients = data.filter(i => i.length && i!== null).join(",")

  const handleClick = (e) => {
    dispatch(saveTheRecipe({name:surprise.strMeal, ingredient: filteredIngredients, cooking_Instructions:surprise.strInstructions}, navigate))
  }
  // const surprise = surpriseDB.find(r => {debugger}) 

  // console.log(surprise)
  // console.log(data)
  return (
    <div className='card'>
      <h5>Recipe#: {id}</h5>
      <h4>Name: {surprise.strMeal}</h4> 
      <img src={surprise.strMealThumb} alt={surprise.strMeal} className="img"/>
      <h3>Ingredient:</h3>{filteredIngredients}
      <p>cooking_Instructions:{surprise.strInstructions}</p> 
      <button onClick={ e => handleClick(e)}>Save</button>

    </div>
  )
}
export default Dish

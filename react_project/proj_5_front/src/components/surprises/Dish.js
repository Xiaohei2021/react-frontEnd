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
  const surprise = surpriseDB.find(s => s.id === parseInt(id)) 
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(saveTheRecipe(parseInt(id)))
  }


  return (
    <div className='card'>

      <button onClick={ e => handleClick(e)}>Save</button>

    </div>
  )
}
export default Dish

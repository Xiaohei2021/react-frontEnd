import React from 'react'
import { deleteRecipe } from '../../actions/recipeActions/recipe'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

class Recipe extends React.Component {
  render() {
  // let params = useParams();
  // debugger
    return (
        <div>
            {this.props.recipe.name}
            <button onClick={ () => this.props.deleteRecipe(this.props.recipe.id)}>Delete</button>
    </div>
    )
  }
}
export default connect(null, {deleteRecipe})(Recipe)

//  function Recipe(props) {

//   // const dispatch = useDispatch();
//   // const params = useParams();

//   // debugger
//   return (
//     <div>
//       {props.recipe.name}--- 
//       {/* {props.recipe.ingredient}  */}
//       {/* {props.recipe.cooking_Instructions} */}
//       {/* <button onClick={ dispatch(deleteRecipe(props.recipe.id))}>Delete</button> */}

//     </div>
//   )
// }
// export default connect(null, { deleteRecipe })(Recipe)

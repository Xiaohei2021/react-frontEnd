// import React from 'react'
// import { deleteRecipe } from '../../actions/recipeActions/recipe'
// import { connect } from 'react-redux'



// class Recipe extends React.Component {

//   render() {
//   let params = useParams();

//   // debugger
//     return (
//         <div>
//             {this.props.recipe.name}
//             <button onClick={ () => this.props.deleteRecipe(this.props.recipe.id)}>Delete</button>
//     </div>
//     )
//   }
// }

// export default connect(null, {deleteRecipe})(Recipe)


import React from 'react'
import { useDispatch } from 'react-redux';

 function Recipe() {
  return (
    <div>Recipe</div>
  )
}
export default connect(null, {deleteRecipe})(Recipe)
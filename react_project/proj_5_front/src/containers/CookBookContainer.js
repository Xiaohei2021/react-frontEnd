import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

// import Recipe from '../components/recipe/Recipe'
// import { connect } from 'react-redux'
import { fetchSavedRecipe }from "../actions/recipeActions/recipe"
// import RecipeInput from '../components/recipe/RecipeInput';
// import RecipeList from '../components/recipe/RecipeList'

// {class CookBookContainer extends Component {

//     componentDidMount() { 
//       this.props.fetchdata(); 
//     }

//   render(){
//     const allRecipes = this.props.savedRecipe.map(r => <Recipe key={r.id} recipe={r}/> )
//     console.log(this.props)
//     return (
//       <div>

//           {/* <nav style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}>
//             <Link to="/home">Home</Link> |{""}
//             <Link to="new">Create New Recipe</Link> |{""}
//             <Link to="list">See All Recipes</Link> |{""}
//             <Link to=":recipeId">See a recipeActions</Link> |{""}
//           </nav>
//           <Outlet/> */}
          
//           {/* <RecipeInput/><hr/> */}
//           {/* <RecipeList savedRecipe = {this.props.savedRecipe} /> */}
//           {allRecipes}
       
//       </div>)
//   }
// }

// const recipeDB = useSelector(state => state.db.ownRecipe)
// function mapStateToProps(state){
//   return{
//     savedRecipe: state.db.ownRecipe
//   }
// }

// const dispatch = useDispatch();
// dispatch( fetchSavedRecipe() )

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchdata: () => dispatch(fetchSavedRecipe()),
//   }
// }



// export default connect(mapStateToProps, mapDispatchToProps)(CookBookContainer)}

 function CookBookContainer(){

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipeDB = useSelector(state => state.db.ownRecipe)

  // const [state, setState] = useState(recipeDB);

  useEffect( ()=> {
    dispatch( fetchSavedRecipe() )}, [])

  function handleCreate(){
    navigate("new")
  }

  function handleRecipes(){
    navigate("list")
  }
  // console.log(recipeDB)

  // debugger
    return (
      <div>
          {/* <nav style={{
            // borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="new">Create New Recipe</Link> |{""}
            <Link to="list">See All Recipes</Link> |{""}
          </nav> */}
         {/* { recipeDB.map(r => <li key={r.id} recipe={r}>{r.name}</li>)}  */}

         <button onClick={handleCreate}>
          Create New Recipe
         </button>
         <button onClick={handleRecipes}>
          See All Recipe
         </button>
          <Outlet context={ recipeDB }/> 

      </div>)
  }
// export default connect(mapStateToProps, mapDispatchToProps)(CookBookContainer)
export default CookBookContainer




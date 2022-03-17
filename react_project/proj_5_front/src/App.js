import { Route, Routes } from 'react-router-dom';
import "./App.css"
import CookBookContainer from './containers/CookBookContainer';
import Home from './components/Home';
import SurpriseContainer from './containers/SurpriseContainer';
import QueryContainer from './containers/QueryContainer';
import RecipeInput from './components/recipe/RecipeInput';
// import { useNavigate } from "react-router-dom";
import Recipe from './components/recipe/Recipe';



function App() {
  // let navigate = useNavigate();
  
  // function handleCreate(){
  //   navigate("/recipes/new");
  // }

  // function handleRecipes(){
  //   navigate("/recipes")
  // }

  return (
    <div className='header'>
      <h1>
        Leon's Cook Book
      </h1>
{/* 
      <button onClick={handleCreate}>Create Recipe </button><br/><br/> 
      <button onClick={handleRecipes}>See Recipes</button>  */}
  

        <Routes>
            <Route path="/home" element={< Home/>} />
            {/* <Route path="/recipes" element={< CookBookContainer/>} /> */}
            <Route path="/recipes" element={< CookBookContainer/>} >

              <Route path={"new"} element={<RecipeInput/>}/>
              <Route path={":recipeId"} element={<Recipe />} />
            </Route>
            <Route path="/surprises" element={< SurpriseContainer/>} /> 
            <Route path="/query" element={< QueryContainer />} /> 
        </Routes> 
    </div>
  );
}

export default App;

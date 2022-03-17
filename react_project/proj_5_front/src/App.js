import { Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import "./App.css"


import Home from './components/Home';
import CookBookContainer from './containers/CookBookContainer';
import SurpriseContainer from './containers/SurpriseContainer';
import QueryContainer from './containers/QueryContainer';
import RecipeInput from './components/recipe/RecipeInput';
import Recipe from './components/recipe/Recipe';
import Error from './components/Error';
import Navbar from './Navbar';



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
  
        <Navbar />

      {/* <div className='navbar'>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/recipes">All Recipes</Link>
        </nav>
      </div> */}
      

        <Routes>
          <Route path="/home" element={< Home/>} />
          <Route path="/recipes" element={< CookBookContainer/>} />
          {/* <Route path="/recipes/new" element={< RecipeInput/>} /> */}
          <Route path="/recipes" element={< CookBookContainer />} >
            <Route path={"new"} element={< RecipeInput />}/>
            <Route path={":recipeId"} element={<Recipe />} />
          </Route>
          <Route path="/surprises" element={< SurpriseContainer/>} /> 
          <Route path="/query" element={< QueryContainer />} /> 
          <Route path="*" element={<Error />} />
        </Routes> 
    </div>
  );
}

export default App;

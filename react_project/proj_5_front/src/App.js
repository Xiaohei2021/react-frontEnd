import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate, useParams  } from "react-router-dom";
import "./App.css"
import Home from './components/Home';
import Recipe from './components/recipe/Recipe'
import RecipeInput from './components/recipe/RecipeInput';
import RecipeList from './components/recipe/RecipeList';
import CookBookContainer from './containers/CookBookContainer';
import QueryContainer from './containers/QueryContainer';
import SurpriseContainer from './containers/SurpriseContainer';
// import Error from './components/Error';
import Navbar from './Navbar';

function App() {
  
  // let navigate = useNavigate();
  
  // function handleCreate(){
  //   navigate("/recipes/new");
  // }

  // function handleIndex(){
  //   navigate("/home")
  // }

  return (
    <div className='header'>
        {/* <Navbar /> */}


        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="/home">Home</Link> |{""}
            <Link to="/recipes">All Recipes</Link> |{""}
            <Link to="/surprises">Get Some Inspiration</Link> |{""}
            <Link to="/query">Search for a Specific Recipe</Link> |{""}
          </nav>

        <Routes>
          <Route path="/home" element={< Home/>} />
          <Route path="/recipes" element={< CookBookContainer />} >
            <Route path={"list"} element={< RecipeList/>} />
            <Route path={"new"} element={< RecipeInput />}/>
            <Route path={":id"} element={<Recipe />} />
          </Route>
          {/* <Route path="/recipes" element={< CookBookContainer/>} /> */}
          {/* <Route path="/recipes/new" element={< RecipeInput/>} /> */}
          <Route path="/surprises" element={< SurpriseContainer/>} /> 
          <Route path="/query" element={< QueryContainer />} /> 
        </Routes> 
  
      {/* <h1>What is your tummy yearning for on this fine day?</h1> 

      <button onClick={handleIndex}>CookBook Index </button><br/><br/> 
      <button onClick={handleCreate}>Create Own Recipe </button><br/><br/> */}
    </div> 
  );
}

export default App;

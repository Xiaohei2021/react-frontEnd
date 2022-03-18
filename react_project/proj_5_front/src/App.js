import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./App.css"



// import Error from './components/Error';
// import Navbar from './Navbar';



function App() {
  let navigate = useNavigate();
  
  function handleCreate(){
    navigate("/recipes/new");
  }

  // function handleRecipes(){
  //   navigate("/recipes")
  // }

  function handleIndex(){
    navigate("/home")
  }

  return (
    <div className='header'>
      <h1>
        Leon's Cook Book
      </h1>
    
      <h1>What is your tummy yearning for on this fine day?</h1>

      <button onClick={handleIndex}>CookBook Index </button><br/><br/> 
      <button onClick={handleCreate}>Create Own Recipe </button><br/><br/> 
      {/* <button onClick={handleRecipes}>See All the Recipes</button>    */}

        {/* <Navbar /> */}

        {/* <Routes>
          <Route path="/home" element={< Home/>} />
          <Route path="/recipes" element={< CookBookContainer />} >
            <Route path={"new"} element={< RecipeInput />}/>
            <Route path={":recipeId"} element={<Recipe />} />
          </Route> */}
          {/* <Route path="/recipes" element={< CookBookContainer/>} /> */}
          {/* <Route path="/recipes/new" element={< RecipeInput/>} /> */}
          {/* <Route path="/surprises" element={< SurpriseContainer/>} /> 
          <Route path="/query" element={< QueryContainer />} />  */}
          {/* <Route path="*" element={<Error />} /> */}
        {/* </Routes>  */}
  

    </div>
  );
}

export default App;

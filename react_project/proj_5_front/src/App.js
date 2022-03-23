import { Routes, Route, Link } from 'react-router-dom';
// import { useNavigate, useParams  } from "react-router-dom";
// import Error from './components/Error';
// import Navbar from './Navbar';

import "./App.css"
import Home from './components/Home';
import Recipe from './components/recipe/Recipe'
import RecipeInput from './components/recipe/RecipeInput';
import RecipeList from './components/recipe/RecipeList';
import CookBookContainer from './containers/CookBookContainer';
import QueryContainer from './containers/QueryContainer';
import SurpriseContainer from './containers/SurpriseContainer';
import SurpriseList from './components/surprises/SurpriseList'
import Dish from './components/surprises/Dish';
import QueryList from './components/query/QueryList';
import QueryDish from './components/query/QueryDish'
import QueryInput from './components/query/QueryInput';
import Edit from './components/recipe/Edit';

function App() {
  
  // let navigate = useNavigate();
  
  // function handleCreate(){
  //   navigate("/recipes/new");
  // }

  // function handleIndex(){
  //   navigate("/home")
  // }

  return (
    <div className='header' >
        {/* <Navbar /> */}

        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <Link to="/home">Home</Link> |{""}
            <Link to="/recipes">Sections of Known Recipe </Link> |{""}
            <Link to="/surprises">Section of random inspiration</Link> |{""}
            <Link to="/query">Section of specific inquery </Link> |{""}
          </nav>

        <Routes>
          <Route path="/home" element={< Home/>} />
          <Route path="/recipes" element={< CookBookContainer />} >
            <Route path={"list"} element={< RecipeList/>} />
            <Route path={"new"} element={< RecipeInput />}/>
            <Route path={":id"} element={<Recipe />} />
            <Route path={":id/update"} element={<Edit />} />
          </Route>
         
          <Route path="/surprises" element={< SurpriseContainer/>} >
            <Route path={"list"} element={< SurpriseList/>} />
            <Route path={":id"} element={<Dish />} /> 
          </Route>
          <Route path="/query" element={< QueryContainer />} >
            <Route path={"search"} element={< QueryInput/>} /> 
            <Route path={"list"} element={< QueryList/>} />
            <Route path={":id"} element={< QueryDish/>} /> 
          </Route> 
        </Routes> 
  
      {/* <h1>What is your tummy yearning for on this fine day?</h1> 

      <button onClick={handleIndex}>CookBook Index </button><br/><br/> 
      <button onClick={handleCreate}>Create Own Recipe </button><br/><br/> */}
    </div> 
  );
}

export default App;

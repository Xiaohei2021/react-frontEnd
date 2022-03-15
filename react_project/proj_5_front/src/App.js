import { Route, Routes } from 'react-router-dom';
import CookBookIndex from "./containers/CookBookIndex";
import RecipeInput from "./components/recipe/RecipeInput";
// import Home from './components/Home';
// import RecipeStorage from './components/RecipeStorage';
import Navbar from './Navbar';
import "./App.css"
import CookBookContainer from './containers/CookBookContainer';
import Home from './components/Home';
import FoodList from './components/FoodList';
import FoodSearch from './components/FoodSearch';


function App() {
  return (
    <div className='header'>
      <h1>
        Leon's Cook Book
      </h1>      
      <Navbar />
        <Routes>
            <Route exact path="/home" element={< Home/>} />
            <Route exact path="/recipes" element={< CookBookContainer/>} />
            <Route exact path="/surprises" element={< FoodList/>} /> 
            <Route exact path="/query" element={< FoodSearch />} /> 
        </Routes> 
    </div>
  );
}

export default App;

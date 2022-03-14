import { Route, Routes } from 'react-router-dom';
import CookBookIndex from "./containers/CookBookIndex";
import RecipeInput from "./components/RecipeInput";
// import Home from './components/Home';
import RecipeStorage from './components/RecipeStorage';
import Navbar from './Navbar';
import "./App.css"


function App() {
  return (
    <div className='header'>
      <h1>
        Leon's Cook Book
      </h1>      
      <Navbar />
        <Routes>
            <Route exact path="/home" element={< CookBookIndex/>} />
            <Route exact path="/recipes" element={< RecipeStorage/>} />
            <Route exact path="/recipes/new" element={< RecipeInput/>} />  
        </Routes> 
    </div>
  );
}

export default App;

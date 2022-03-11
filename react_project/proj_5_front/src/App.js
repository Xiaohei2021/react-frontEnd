import { Link, Route, Routes } from 'react-router-dom';
import CookBookIndex from "./containers/CookBookIndex";
import RecipeInput from "./components/RecipeInput";
import Home from './components/Home';


function App() {
  return (
    <div className='header'>
      <h1>
        Leon's Cook Book
      </h1>      
        {/* <Link to="/recipes"> Saved Recipes </Link><br/>
        <Link to="/recipes/new"> Create Own Recipes </Link><br/>

        <Routes>
            <Route exact path="/recipes" element={< CookBookIndex/>} />
            <Route exact path="/recipes/new" element={< RecipeInput/>} />  
        </Routes>  */}
      <Home/>
    </div>
  );
}

export default App;

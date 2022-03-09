import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FavoriteList from './components/FavoriteList';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className='header'>
      <h1>
        Leon's Cook Book
      </h1>

      
      <Link to="/">Home</Link>
      <Link to="favorite">Favorites</Link>
      <Routes>
        <Route path="/favorite" element={<FavoriteList/>} /> 
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route, NavLink } from 'react-router-dom';
// import { useNavigate, useParams  } from "react-router-dom";
// import Error from './components/Error';
// import Navbar from './Navbar';

import "./css/App.css"
import Home from './components/Home';
import Recipe from './components/recipe/Recipe'
import RecipeInput from './components/recipe/RecipeInput';
import RecipeList from './components/recipe/RecipeList';
import CookBookContainer from './containers/CookBookContainer';
import QueryContainer from './containers/QueryContainer';
import SurpriseContainer from './containers/SurpriseContainer';
import SurpriseList from './components/surprises/SurpriseList'
import SurpriseDish from './components/surprises/SurpriseDish';
import QueryList from './components/query/QueryList';
import QueryDish from './components/query/QueryDish'
import QueryInput from './components/query/QueryInput';
import Edit from './components/recipe/Edit';

function App() {
  
return (
  <div className='bookCover'>
        <h1 >Leon's CookBook</h1>
        <div >
          <NavLink 
            to="/home"  
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#00dc76' : '#f0f0f0',
              })}>Home</NavLink> |{""}
          <NavLink 
            to="/recipes"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#00dc76' : '#f0f0f0',
              })}>Section of Known Recipe </NavLink> |{""}
          <NavLink 
            to="/surprises"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#00dc76' : '#f0f0f0',
              })}>Section of random inspiration</NavLink> |{""}
          <NavLink 
            to="/query"style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#00dc76' : '#f0f0f0',
              })}>Section of specific inquery </NavLink> |{""}
        </div>
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
            <Route path={":id"} element={<SurpriseDish />} /> 
          </Route>

          <Route path="/query" element={< QueryContainer />} >
            <Route path={"search"} element={< QueryInput/>} /> 
            <Route path={"list"} element={< QueryList/>} />
            <Route path={":id"} element={< QueryDish/>} /> 
          </Route> 

        </Routes> 
  </div> 
  );
}

export default App;

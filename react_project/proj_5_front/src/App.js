import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import "./App.css"
import CookBookContainer from './containers/CookBookContainer';
import Home from './components/Home';
import SurpriseContainer from './containers/SurpriseContainer';
import QueryContainer from './containers/QueryContainer';


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
            <Route exact path="/surprises" element={< SurpriseContainer/>} /> 
            <Route exact path="/query" element={< QueryContainer />} /> 
        </Routes> 
    </div>
  );
}

export default App;

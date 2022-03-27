import { Routes, Route, NavLink } from 'react-router-dom';
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
import SurpriseDish from './components/surprises/SurpriseDish';
import QueryList from './components/query/QueryList';
import QueryDish from './components/query/QueryDish'
import QueryInput from './components/query/QueryInput';
import Edit from './components/recipe/Edit';

function App() {
  


  return (
  <div className='bookCover'>
    <h1 >Leon's CookBook</h1>

    <div className='cover'>
      <div className='book'>
        <label for="page-1"  className="book__page book__page--1">
        </label>

    <label for="page-2" className="book__page book__page--4">
      <div className="page__content">

        <h1 className="page__content-title">I</h1>
        <div className="page__content-blockquote">
          {/* <p className="page__content-blockquote-text">HARI SELDON — . . . born in the 11,988th year of the Galactic Era; died 12,069. The dates are more commonly given in terms of the current Foundational Era as -79 to the year 1 F.E. Born to middle-class parents on Helicon, Arcturus sector (where his father, in a legend of doubtful authenticity, was a tobacco grower in the hydroponic plants of the planet), he early showed amazing ability in mathematics. Anecdotes concerning his ability are innumerable, and some are contradictory. At the age of two, he is said to have. . . </p>
          <p className="page__content-blockquote-text">. . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vague axioms; he left it a profound statistical science. . . . </p>
          <p className="page__content-blockquote-text">. . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young man, met Seldon two years before the great mathematician's death. The story of the meeting . . .</p>
          <span className="page__content-blockquote-reference">Encyclopedia Galactica*</span> */}
        </div>

        {/* <div className="page__content-text">
          <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p>
          <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p>
        </div> */}

         <div className="page__number">3</div>
      </div>
    </label>
    
    <input type="radio" name="page" id="page-1"/>
    <input type="radio" name="page" id="page-2"/>

      <label className="book__page book__page--2">

        <div className="book__page-front">
          <div className="page__content">
            <h1 className="page__content-book-title">Foundation</h1>
            <h2 className="page__content-author">Isaac Asimov</h2>
            <p className="page__content-credits">
              Introduction by 
              <span>Paul Krugman</span>
            </p>  
            <p className="page__content-credits">
              Illustrations by 
              <span>Alex Wells</span>
            </p>
            
            <div className="page__content-copyright">
              <p>The Folio Society</p>
              <p>London - MMXII</p>
            </div>

          </div>
        </div>

        <div className="book__page-back">
          <div className="page__content">
            <h1 className="page__content-title">Contents</h1>
            <table className="page__content-table">
              <tr>
                <td align="left">CHAPTER I</td>
                <td align="left"> <NavLink to="/home" style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#00dc76' : '#f0f0f0',
                  })}>Home</NavLink></td>
                <td align="right">3</td>
              </tr>
              <tr>
                <td align="left">CHAPTER II</td><td align="left"><NavLink to="/recipes" style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#00dc76' : '#f0f0f0',
                  })}> Saved/Known Recipes </NavLink></td><td align="right">43</td>
              </tr>
              <tr>
                <td align="left">CHAPTER III</td><td align="left"><NavLink to="/surprises" style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#00dc76' : '#f0f0f0',
                  })}>Random Inspirations</NavLink></td><td align="right">87</td>
              </tr>
              <tr>
                <td align="left">CHAPTER IV</td><td align="left"><NavLink to="/query"style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#00dc76' : '#f0f0f0',
                  })}>Specific inquery </NavLink></td><td align="right">147</td>
              </tr>
  
            </table>
            <div className="page__number">2</div>
          </div>
        </div>
      </label>

        {/* <div >
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
        </div> */}

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
    </div> 
  </div> 
  );
}

export default App;

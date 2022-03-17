import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route   } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store";



// import Home from './components/Home';
import CookBookContainer from './containers/CookBookContainer';
import SurpriseContainer from './containers/SurpriseContainer';
import QueryContainer from './containers/QueryContainer';
import RecipeInput from './components/recipe/RecipeInput';
import Recipe from './components/recipe/Recipe';
import Home from './components/Home';
// import Error from './components/Error';


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter >
          
          
          
//           <App />
//       </BrowserRouter >
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter > 
        <Routes>

          <Route path="/" element={ <App />} />
            <Route path="/home" element={< Home/>} />

            <Route path="/surprises" element={< SurpriseContainer/>} >
              <Route path={":surpriseId"} element={<Recipe />} />
            </Route> 

            <Route path="/query" element={< QueryContainer />} />
              <Route path={":queryId"} element={<Recipe />} >
            </Route> 

            <Route path="/recipes" element={< CookBookContainer />} >
                <Route path={"new"} element={< RecipeInput />}/>
                <Route path={":recipeId"} element={<Recipe />} />
            </Route>

        </Routes> 
      </BrowserRouter >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



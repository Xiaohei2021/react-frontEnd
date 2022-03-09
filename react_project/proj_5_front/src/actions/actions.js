import { GET_RANDOM_RECIPES } from "./actionTypes"

export const fetchSurprise = () => {
    return (dispatch) => {
        fetch("https://themealdb.p.rapidapi.com/randomselection.php", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "themealdb.p.rapidapi.com",
              "x-rapidapi-key": "da4f016a88msh0f102f0fca24bfcp1fd784jsn2faf65ebf551"
          }
      })
        .then(r => r.json())
        .then(surprise => dispatch({type: "GET_RANDOM_RECIPES", surprise}))
        // .then(surprise => console.log(surprise))
    //    debugger

    }
  }

//   fetchDishes = (query) => {
//     fetch(`https://themealdb.p.rapidapi.com/search.php?s=${query}`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "themealdb.p.rapidapi.com",
//         "x-rapidapi-key": "da4f016a88msh0f102f0fca24bfcp1fd784jsn2faf65ebf551"}
//     })
//     .then(response => response.json())
//     .then(data => this.setState( {searchData:data} ))
//     .catch(err => {
//     console.error(err);
//     });
//   }
  
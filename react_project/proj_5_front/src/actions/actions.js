import { CREATE_RECIPE, DELETE_RECIPE, GET_RANDOM_RECIPES, GET_SAVED_RECIPE } from "./actionTypes"
import { GET_QUERIED_RECIPE } from "./actionTypes"


const addSurprise = (surprise) =>{
    return{
        type: GET_RANDOM_RECIPES,
        surprise
    }
}



const deleteOwnRecipe = (id) => {
    return{
        type: DELETE_RECIPE,
        id
    }
}

const getResult = (result) => {
    return{
        type: GET_QUERIED_RECIPE,
        result
    }
}

const createRecipe = (newRecipe) => {
    return{
        type: CREATE_RECIPE, 
        newRecipe
    }
}

const getRecipe = (savedRecipe) => {
    return{
        type: GET_SAVED_RECIPE,
        savedRecipe
    }
}


export const fetchSavedRecipe = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/recipes")
        .then(r => r.json())
        .then(data => dispatch(getRecipe(data)))
    }
}

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
        .then(surprise => dispatch(addSurprise(surprise)))
        // .then(surprise => console.log(surprise))
    //    debugger

    }
  }

  export const fetchRecipe = (query) => {
    return (dispatch) => {
        fetch(`https://themealdb.p.rapidapi.com/search.php?s=${query}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "themealdb.p.rapidapi.com",
            "x-rapidapi-key": "da4f016a88msh0f102f0fca24bfcp1fd784jsn2faf65ebf551"}
        })
    .then(r => r.json())
    .then(result => dispatch(getResult(result) ))
    // .then(surprise => console.log(surprise))
    // .catch(err => {
    // console.error(err);
    // });
  }
}

export const createOwnRecipe = (formInput) =>{
    return dispatch => {
        fetch("http://localhost:3000/recipes", {
            "method": "POST",
            "headers": {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(formInput)
        })
        .then(r=>{
            if(r.ok){
                r.json().then(newRecipe => dispatch(createRecipe(newRecipe)))
            }else{
                r.json().then(err => console.error(err))
            }
        })
    }
}

// export const deleteRecipe = (formInput) =>{
//     return dispatch => {
//         fetch("http://localhost:3000/recipes", {
//             "method": "POST",
//             "headers": {
//                 'Content-Type': "application/json",
//                 'Accept': "application/json"
//             },
//             body: JSON.stringify(formInput)
//         })
//         .then(r=>{
//             if(r.ok){
//                 r.json().then(newRecipe => dispatch(createRecipe(newRecipe)))
//             }else{
//                 r.json().then(err => console.error(err))
//             }
//         })
//     }
// }
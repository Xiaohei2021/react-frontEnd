import { GET_QUERIED_RECIPE } from "../actionTypes"

const getResult = (result) => {
    return{
        type: GET_QUERIED_RECIPE,
        result
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
        .then(r=>{
            if(r.ok){
                r.json().then(result => dispatch(getResult(result) ))
            }else{
                r.json().then(err => console.error(err))
            }
        })
    // .then(r => r.json())
    // .then(result => dispatch(getResult(result) ))
    // .then(surprise => console.log(surprise))
    // .catch(err => {
    // console.error(err);
    // });
  }
}
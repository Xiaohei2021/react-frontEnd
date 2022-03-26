import { GET_SAVED_RECIPE, CREATE_RECIPE, SAVE_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from "../actionTypes"

const getRecipe = (savedRecipe) => {
    return{
        type: GET_SAVED_RECIPE,
        savedRecipe
    }
}

const createRecipe = (newRecipe) => {
    return{
        type: CREATE_RECIPE, 
        newRecipe
    }
}

const absorbRecipe =(targetRecipe) =>{
    return{
        type: SAVE_RECIPE,
        targetRecipe
    }
}

const deleteOwnRecipe = (id) => {
    return{
        type: DELETE_RECIPE,
        id
    }
}

const editRecipe = (modifiedRecipe) => {
    return{
        type: EDIT_RECIPE,
        modifiedRecipe
    }
}


export const fetchSavedRecipe = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/recipes")
        .then(r => r.json())
        .then(data => dispatch(getRecipe(data)))
    }
}

export const createOwnRecipe = (formInput, navigate) =>{
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
                r.json().then(newRecipe => 
                    dispatch(createRecipe(newRecipe)),
                    navigate("/recipes/list") )
            }else{
                r.json().then(err => console.error(err))
            }
        })
    }
}

export const saveTheRecipe = (APIData, navigate) =>{
    return dispatch => {
        fetch("http://localhost:3000/recipes", {
            "method": "POST",
            "headers": {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(APIData)
        })
        .then(r=>{
            if(r.ok){
                r.json().then(targetRecipe => dispatch(absorbRecipe(targetRecipe)),  navigate("/recipes/list"))
            }else{
                r.json().then(err => console.error(err))
            }
        })
    }
}

export const deleteRecipe = (id, navigate) =>{
    return dispatch => {
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE"
        })
        .then(r => dispatch(deleteOwnRecipe(id)),navigate("/recipes/list") )
            
    }
}

export const editTheRecipe = (recipe, navigate) =>{
    return dispatch => {
        fetch(`http://localhost:3000/recipes/${recipe.id}`, {
            "method": "PATCH",
            "headers": {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(recipe)
        })
        .then(r=>{
            if(r.ok){
                r.json().then(modifiedRecipe => dispatch(editRecipe(modifiedRecipe)),  navigate("/recipes/list"))
            }else{
                r.json().then(err => console.error(err))
            }
        })
    }
}

import { GET_SAVED_RECIPE, CREATE_RECIPE, SAVE_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from "../actions/actionTypes";

export default function ownReducer(state = {ownRecipe: []}, action){
    let idx;
    switch (action.type) {
       
        case GET_SAVED_RECIPE:
            return {...state, ownRecipe: action.savedRecipe}

        case CREATE_RECIPE :
            return {...state, ownRecipe:[...state.ownRecipe, action.newRecipe]}

        case SAVE_RECIPE:
            // const targetRecipe={
            //     name: action.name,
            //     ingredient: action.ingredient,
            //     cooking_Instructions: action.cooking_Instructions
            // }
            return{...state, ownRecipe:[...state.ownRecipe, action.targetRecipe]}

        case EDIT_RECIPE:    
            idx = state.ownRecipe.findIndex(recipe => recipe.id === action.id)
            return {...state, 
                ownRecipe:[
                    ...state.ownRecipe.slice(0, idx), 
                    action.modifiedRecipe, 
                    ...state.ownRecipe.slice(idx + 1)
                ]
            }


    
        case DELETE_RECIPE:
            idx = state.ownRecipe.findIndex(recipe => recipe.id === action.id)
            return{...state,ownRecipe:[...state.ownRecipe.slice(0, idx), ...state.ownRecipe.slice(idx+1)] }

        

        default:
            return state;
    }
}
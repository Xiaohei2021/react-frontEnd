import { } from "../actions/actionTypes";

export default function ownReducer(state = {notes: []}, action){
    let idx;
    switch (action.type) {
       

        case CREATE_NOTE :
            return {...state, ownRecipe:[...state.ownRecipe, action.newRecipe]}
    
        case DELETE_NOTE:
            idx = state.ownRecipe.findIndex(recipe => recipe.id === action.id)
            return{...state,ownRecipe:[...state.ownRecipe.slice(0, idx), ...state.ownRecipe.slice(idx+1)] }

        default:
            return state;
    }
}
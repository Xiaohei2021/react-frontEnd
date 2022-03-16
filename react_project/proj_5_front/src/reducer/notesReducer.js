import { } from "../actions/actionTypes";

export default function ownReducer(state = {notes: []}, action){
    let idx;
    switch (action.type) {
       

        case CREATE_NOTE :
            return {...state, notes:[...state.notes, action.newRecipe]}
    
        case DELETE_NOTE:
            idx = state.notes.findIndex(recipe => recipe.id === action.id)
            return{...state,notes:[...state.notes.slice(0, idx), ...state.notes.slice(idx+1)] }

        default:
            return state;
    }
}
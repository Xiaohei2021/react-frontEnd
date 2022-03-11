import { GET_SAVED_RECIPE, CREATE_RECIPE } from "../actions/actionTypes";

export default function ownReducer(state = {ownRecipe: []}, action){
    switch (action.type) {

        case GET_SAVED_RECIPE:
            return {...state, ownRecipe: action.savedRecipe}

        case CREATE_RECIPE :
            return {...state, ownRecipe:[...state.ownRecipe, action.newRecipe]}
    
        default:
            return state;
    }
}
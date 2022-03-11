export default function ownReducer(state = {ownRecipe: [], action}){
    switch (action.type) {
        case CREATE_RECIPE :
            return {...state, ownRecipe: action.newRecipe}
    
        default:
            return state;
    }
}
import { } from "../actions/actionTypes";

export default function ownReducer(state = {notes: []}, action){
    let idx;
    switch (action.type) {
       

        case CREATE_NOTE :
            return {...state, notes:[...state.notes, action.newNote]}
    
        case DELETE_NOTE:
            idx = state.notes.findIndex(note => note.id === action.id)
            return{...state,notes:[...state.notes.slice(0, idx), ...state.notes.slice(idx+1)] }

        default:
            return state;
    }
}
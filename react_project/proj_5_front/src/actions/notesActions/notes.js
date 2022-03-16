import { CREATE_NOTE, DELETE_NOTE } from "../actionTypes"


const addNote = (newNote) => {
    return{
        type: CREATE_NOTE,
        newNote
    }
}

const deleteNote = (id) => {
    return{
        type: DELETE_NOTE,
        id
    }
}
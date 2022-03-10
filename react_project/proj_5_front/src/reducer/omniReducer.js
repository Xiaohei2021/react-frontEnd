import { combineReducers } from "redux";
import queryReducer from "./queryReducer";
import surpriseReducer from "./surpriseReducer"

const omniReducer = combineReducers({
    query: queryReducer,
    surprise: surpriseReducer
})

export default omniReducer;
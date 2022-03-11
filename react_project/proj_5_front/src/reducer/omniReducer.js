import { combineReducers } from "redux";
import ownReducer from "./ownReducer";
import queryReducer from "./queryReducer";
import surpriseReducer from "./surpriseReducer"

const omniReducer = combineReducers({
    db: ownReducer,
    query: queryReducer,
    surprise: surpriseReducer
})

export default omniReducer;
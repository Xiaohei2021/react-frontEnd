import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import surpriseReduer from "./reducer/surpriseReducer";
// import queryReducer from "./reducer/queryReducer"
import omniReducer from "./reducer/omniReducer"

export default createStore(omniReducer, applyMiddleware(thunk))
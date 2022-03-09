import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import surpriseReduer from "./reducer/surpriseReducer";

export default createStore(surpriseReduer, applyMiddleware(thunk))
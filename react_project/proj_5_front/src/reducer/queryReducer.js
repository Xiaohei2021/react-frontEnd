// const initialState = {}

import { GET_QUERIED_RECIPE } from "../actions/actionTypes"

export default function queryReducer (state = {queryResult: []}, action){
  switch (action.type) {

  case GET_QUERIED_RECIPE:
    return { ...state, queryResult: action.result.meals }

  default:
    return state
  }
}

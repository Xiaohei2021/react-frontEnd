// const initialState = {}

import { GET_RANDOM_RECIPES } from "../actions/actionTypes"

export default function surpriseReduer (state = {randomRecipes: []}, action)
{
  switch (action.type) {

  case GET_RANDOM_RECIPES:
    return {...state, randomRecipes: action.surprise}

  default:
    return state
  }
}

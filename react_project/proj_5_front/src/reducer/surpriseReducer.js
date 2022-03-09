// const initialState = {}

export default function surpriseReduer (state = {randomRecipes: []}, action)
{
  switch (action.type) {

  case "GET_RANDOM_RECIPES":
    return {...state, randomRecipes: action.randomRecipes}

  default:
    return state
  }
}

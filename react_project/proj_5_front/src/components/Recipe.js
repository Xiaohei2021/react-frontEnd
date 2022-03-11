import React from 'react'

export default function Recipe(props) {


  return (
    <div>
        {props.recipe.name}
        <button>Delete</button>
    </div>
  )
}

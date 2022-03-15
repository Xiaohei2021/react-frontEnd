import React from 'react'
import { deleteRecipe } from '../../actions/actions'
import { connect } from 'react-redux'


class Recipe extends React.Component {
  render() {
    return (
        <div>
            {this.props.recipe.name}
            <button onClick={ () => this.props.deleteRecipe(this.props.recipe.id)}>Delete</button>
    </div>
    )
  }
}

export default connect(null, {deleteRecipe})(Recipe)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import notesInput from '../components/notes/notesInput'

class NotesContainer extends Component {
  render() {
    return (

      <div>
        <notesInput />
      </div>

    )
  }
}


export default connect()(NotesContainer)
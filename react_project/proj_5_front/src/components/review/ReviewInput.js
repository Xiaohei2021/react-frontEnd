import React, { Component } from 'react'

export default class ReviewInput extends Component {

    state = {notes: ""}

    handleChange = (e) =>{
        this.setState({notes: e.target.value})
    }

    handleSubmit = () => {
        e.preventDefault();
        // this.props.
    }

  render() {
    return (
      <div>
          ReviewInput
            <form onSubmit={handleSubmit}>
                <input 
                    type="textarea" 
                    placeholder='Enter your review here'
                    value = {this.state.notes} 
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
      </div>
    )
  }
}

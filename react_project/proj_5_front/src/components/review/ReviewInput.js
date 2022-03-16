import React, { Component } from 'react'

export default class ReviewInput extends Component {

    state = {review: ""}

  render() {
    return (
      <div>
          ReviewInput
            <form>
                <input 
                    type="textarea" 
                    placeholder='Enter your review here'
                    value = {this.state.review} 
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
      </div>
    )
  }
}

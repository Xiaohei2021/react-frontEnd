// import React, { Component } from 'react'

import React from 'react'
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchRecipe } from '../../actions/queryActions/query';

// export default class QueryInput extends Component {
// state={
//     query: ""
// }
// handleQuery = (e) =>{
//   this.setState({query: e.target.value})
// }
// handleSubmit = (e) => {
//   e.preventDefault();
//   // debugger
//   this.props.fetchRecipe(this.state.query)
//   this.setState({query: ""})
// }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Enter the name of the dish"
//             value = {this.state.query}
//             onChange={this.handleQuery}   
//           />
//           <input type="submit" />
//         </form>
//       </div>
//     )
//   }
// }


function QueryInput() {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    dispatch(fetchRecipe(query), navigate)
    setQuery("")
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Enter the name of the dish"
          value = {query}
          onChange={e => setQuery(e.target.value)}   
        />
        <input type="submit" />
      </form>
    </div>
  )
}
export default QueryInput
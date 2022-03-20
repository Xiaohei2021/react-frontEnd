// import React, { Component } from 'react'
import React from 'react'
import { useOutletContext, Link  } from 'react-router-dom'


import Dish from './Dish'

// export default class SurpriseList extends Component {
//   render() {
//     // debugger
//       // const { surprises } = this.props;
//       // const randomdishes = surprises.map(surprise => {
//       //   return (
//       //     <Dish key={surprise.idMeal} dish={surprise} />
//       //   )})

//       const randomdishes =this.props.surprises.map(surprise => {
//         return (
//           <Dish key={surprise.idMeal} dish={surprise} />
//         )})


//     return (
//       <div className='card'>
        
    
//         {randomdishes}  
//         {/* {surpriseList} */}
//       </div>
      
//     )
//   }
// }


function SurpriseList() {

  const surpriseDB = useOutletContext();
  // console.log(surpriseDB)
  return (
    <div>
      
      <h2>SurpriseList </h2>
      <ol>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",}}
      >
        {surpriseDB.map((surprise) => (
          <li>
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/surprises/${surprise.idMeal}`}
              key={surprise.idMeal}
            >
              {surprise.strMeal} 
            </Link>
          </li>))
        }
      </nav>
      </ol>
    </div>
  )
}
export default SurpriseList
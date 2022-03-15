// import React from 'react'

// export default function Dish(props) {


//   // solution #1{
//   //   const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, 
//   //       strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
//   //       strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, 
//   //       strIngredient19, strIngredient20 } = props.dish
    
//   //   const ingredient = {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, 
//   //       strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
//   //       strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, 
//   //       strIngredient19, strIngredient20  }
//   // }

//   // solution #2{ 
//   //   const meal = props.dish
    
//   //   Object.keys(obj).
//   //   filter((key) => key.includes('Name')).
//   //   reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] })}, {});

//   //   Object.keys(meal).
//   //   filter((key) => key.includes('strIngredient')).
//   //   reduce((cur, key) => { return Object.assign(cur, { [key]: neal[key] })}, {});
//   // }


//   //solution #3 
//   const meal = props.dish /* destructure the object*/

//   // props.dish{idMeal: "52854"
//   // strArea: "American"
//   // strCategory: "Dessert"
//   // strCreativeCommonsConfirmed: null
//   // strDrinkAlternate: null
//   // strImageSource: null
//   // strIngredient1: "Flour"
//   // strIngredient2: "Eggs"
//   // strIngredient3: "Milk"
//   // strIngredient4: "Sunflower Oil"
//   // strIngredient5: "Sugar"
//   // strIngredient6: "Raspberries"
//   // strIngredient7: "Blueberries"
//   // strIngredient8: ""
//   // strIngredient9: ""
//   // strIngredient10: ""
//   // strIngredient11: ""
//   // strIngredient12: ""
//   // strIngredient13: ""
//   // strIngredient14: ""
//   // strIngredient15: ""
//   // strIngredient16: ""
//   // strIngredient17: ""
//   // strIngredient18: ""
//   // strIngredient19: ""
//   // strIngredient20: ""
//   // strInstructions: "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.\r\nSet a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.\r\nServe with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
//   // strMeal: "Pancakes"
//   // strMealThumb: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
//   // strMeasure1: "100g "
//   // strMeasure2: "2 large"
//   // strMeasure3: "300ml "
//   // strMeasure4: "1 tbls"
//   // strMeasure5: "to serve"
//   // strMeasure6: "to serve"
//   // strMeasure7: "to serve"
//   // strMeasure8: ""
//   // strMeasure9: ""
//   // strMeasure10: ""
//   // strMeasure11: ""
//   // strMeasure12: ""
//   // strMeasure13: ""
//   // strMeasure14: ""
//   // strMeasure15: ""
//   // strMeasure16: ""
//   // strMeasure17: ""
//   // strMeasure18: ""
//   // strMeasure19: ""
//   // strMeasure20: ""
//   // strSource: "https://www.bbcgoodfood.com/recipes/2907669/easy-pancakes"
//   // strTags: "Breakfast,Desert,Sweet,Fruity"
//   // strYoutube: "https://www.youtube.com/watch?v=LWuuCndtJr0"}





//   //Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes('Name')));
  
//   const ingredients = Object.fromEntries(Object.entries(meal).filter(([key]) => key.includes('strIngredient'))); /* Extract out all the desire key and value pairs from the props array and form a new object*/
//   // ingredient{strIngredient1: "Flour"
//   // strIngredient2: "Eggs"
//   // strIngredient3: "Milk"
//   // strIngredient4: "Sunflower Oil"
//   // strIngredient5: "Sugar"
//   // strIngredient6: "Raspberries"
//   // strIngredient7: "Blueberries"
//   // strIngredient8: ""
//   // strIngredient9: ""
//   // strIngredient10: ""
//   // strIngredient11: ""
//   // strIngredient12: ""
//   // strIngredient13: ""
//   // strIngredient14: ""
//   // strIngredient15: ""
//   // strIngredient16: ""
//   // strIngredient17: ""
//   // strIngredient18: ""
//   // strIngredient19: ""
//   // strIngredient20: ""}


//   let data = Object.keys(ingredients).map(function(key){ return(ingredients[key])}) /* extract all the values of the new object and put all the values into an array*/

//   // data{['Flour', 'Eggs', 'Milk', 'Sunflower Oil', 'Sugar', 'Raspberries', 'Blueberries', '', '', '', '', '', '', '', '', '', '', '', '', '']}

//   let filteredIngredients = data.filter(i => i.length > 0) /* filter all the empty item from the array and return an array with strings*/
//   // filtered{['Flour', 'Eggs', 'Milk', 'Sunflower Oil', 'Sugar', 'Raspberries', 'Blueberries']}
//   filteredIngredients = filteredIngredients.join(",") /*join all the array element into a string seperated by commas */

//   // debugger
//   return (
//     <div>
//         {/* <img src={props.dish.strMealThumb}/> */}
//         {props.dish.strMeal}-----
//         {filteredIngredients}<br/> 
//         {props.dish.strInstructions}<hr/>
   
//         {/* {ingredient}  */}
//         {/* {data} */}
//       <button onClick={this.handleSave}>Save Recipe</button>

//     </div>
//   )
// }

import React, { Component } from 'react'
import { saveTheRecipe } from '../actions/actions'
import { connect } from 'react-redux'

class Dish extends Component {

  state = {
    name:"",
    ingredient: "",
    cooking_Instructions: ""
  }

  handleSave = () => {
    
    this.setState({
      name: this.props.dish.strMeal ,
      ingredient: this.extractData(),
      cooking_Instructions: this.props.dish.strInstructions
    })
    // debugger
    // this.props.saveTheRecipe(this.state)
  }

  extractData = () =>{
    let filteredIngredients = {}
    const meal = this.props.dish 
    const ingredients = Object.fromEntries(Object.entries(meal).filter(([key]) => key.includes('strIngredient')))
    const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])})
    return filteredIngredients =()=> data.filter(i => i !== null).join(",")
  }

  render() {

    const meal = this.props.dish /* destructure the object*/
    const ingredients = Object.fromEntries(Object.entries(meal).filter(([key]) => key.includes('strIngredient'))); /* Extract out all the desire key and value pairs from the props array and form a new object*/
    const data = Object.keys(ingredients).map(function(key){ return(ingredients[key])}) /* extract all the values of the new object and put all the values into an array*/
    const filteredIngredients = data.filter(i => i !== null).join(",") /* filter all the empty item from the array and return an array with strings*/
    // const filteredIngredients = data.filter(i => {debugger} )

    // filteredIngredients = filteredIngredients.join(",") /*join all the array element into a string seperated by commas */
    // debugger

    return (
      <div>
        <h3>Here is a recipe you can learn from today!</h3>

        {this.props.dish.strMeal}-----
        {filteredIngredients}<br/> 
        {this.props.dish.strInstructions}<br/>
        <button onClick={this.handleSave}>Save Recipe</button><hr/>
        {/* {ingredient}  */}
        {console.log(this.state)}
        {/* {data} */}

      </div>
    )
  }
}
export default connect(null, { saveTheRecipe })(Dish)


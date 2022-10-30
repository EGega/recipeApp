import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../../../components/Navbar/Nav'
import recipeStyle from './RecipeDisplayer.module.css'
import { useNavigate } from 'react-router-dom';

const RecipeDisplayer = () => {
  let navigate = useNavigate()
  

  const {state: res} = useLocation()
  const fixedCal = res.recipe.calories.toFixed(2)
  const ingr = res.recipe.ingredientLines.map((el) => {
       return el
  })
  console.log(ingr);
 
  return (
    <>
    <Nav/>
    <div className={recipeStyle.container}>
      <div className={recipeStyle.wrapper}>
      <div className={recipeStyle.leftDiv}>
      <h4> Dish Name: {res.recipe.label}</h4> 
       <p>Calories {fixedCal}</p>
       <p>Cusine Type {res.recipe.cusineType}</p>
       <p>Dish Type {res.recipe.dishType}</p>
       <p>Preperation Time {res.recipe.totalTime}min</p>
      </div>
      <div className={recipeStyle.img}>
      <img src={res.recipe.image} alt="" />
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      
      <div className={recipeStyle.ingredients}>
        <h3>Ingredients
        </h3>
       <div className={recipeStyle.ingredientList}>
        {res.recipe.ingredientLines.map((el) => {
       return <p>{el}</p>
  })}
       </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default RecipeDisplayer
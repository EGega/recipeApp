import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import foodStyle from './FoodFetcher.module.css'


const FoodFetcher = () => {
  let navigate = useNavigate()
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [result, setResult] = useState([]);
  const getRecipe = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=325ca4c4&app_key=
      badca056659a29c0d5daa985c692aeb4`
      const res = await fetch(url);
      const data = await res.json();
      setResult(data.hits);
  }

localStorage.setItem("result", JSON.stringify(result))
const localResult = JSON.parse(localStorage.getItem("result"))


  return (
    <>
    <div  className={foodStyle.wrapper} >
      <h2>Enea's Recipes</h2>
      <form action="">
        <input type="text" className={foodStyle.text} onChange={(e) => setQuery(e.target.value) }/>
        <input type="submit" value="Search" className={foodStyle.btn} onClick={(e) => {
          e.preventDefault()
           getRecipe()
        }} />
        <select className={foodStyle.meal} id="meal" onChange={(e) => setMeal(e.target.value) } >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
      </form>
      <div className={foodStyle.cards}>
      {result && result?.map((res) => {
        // const {calories, label, } = res
      
   return (
   <div className={foodStyle.card}>
    <h3>{res.recipe.label}</h3>
    <img src={res.recipe.image} />
    <button className={foodStyle.btnCard} onClick={() => {
      navigate(`/${res.recipe.label}`, {state: res})
    }} >View More</button>
   </div>)
   })}
      </div>
   
    </div> 
    </>
  )
}

export default FoodFetcher
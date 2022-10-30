import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginSytle from './Login.module.css'
import mealSvg from '../../assets/meal2.svg'
import { useState } from 'react'

const Login = ({auth, setAuth}) => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })  
  let navigate = useNavigate()
  const authHandler = () => {
    setAuth(true)
    if(login.email === "noahadams@gamail.com" && login.password === "noah123") {
      navigate('/')
    }
    console.log(auth);
  }
 console.log(auth);
  return (
    <div className={loginSytle.mainDiv}>
    <form action="" className={loginSytle.form} >
      <img src={mealSvg} alt="" />
      <h3>Enea's Recipes</h3>
      <div className={loginSytle.wrapper}>
       <input type="email" placeholder='Enter your email' onChange={(e) => {
        setLogin({...login, email: e.target.value})
       }} />
       <input type="password" placeholder='Enter your password' onChange={(e) => {
        setLogin({...login, password: e.target.value})
       }} />
       <button onClick={authHandler} className={loginSytle.btn}  >Login</button>
      </div>
    </form>
    </div>
      
      
  )
}

export default Login
import React from 'react'
import { NavLink } from 'react-router-dom'
import navStyle from './Nav.module.css'
const Nav = () => {
  return (
    <div className={navStyle.container}>
      <div>
      <NavLink to={'/'} className={navStyle.navlink}>Home</NavLink>
      </div>
      <div className={navStyle.rightDiv}>
      <NavLink to={'/about'} className={navStyle.navlink} >About</NavLink>
      <a href='https://github.com/EGega' target="_blank" className={navStyle.navlink} >Github</a>
      <NavLink to={'/login'} className={navStyle.navlink} >Logout</NavLink>
      </div>
    </div>
  )
}

export default Nav
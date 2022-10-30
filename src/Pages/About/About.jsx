import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Nav from '../../components/Navbar/Nav';
import userImg from '../../assets/default-image.jpg' 
import aboutStyle from './About.module.css' 

const About = () => {
  let navigate = useNavigate();
  return (
    <>
    <Nav />
    <div className={aboutStyle.container}>
      <div className={aboutStyle.wrapper}>
        <div className={aboutStyle.leftDiv}>
          <img src={userImg} alt="" />
          <div className={aboutStyle.info}>
          <h2>Welcome To Enea's Profile</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima sunt non maiores tempora unde quam fuga similique qui debitis! Inventore, natus impedit itaque animi quos libero quo, alias, accusamus beatae atque nam vitae quisquam deserunt? Reiciendis obcaecati tenetur laboriosam nulla et. Fugit adipisci hic nihil ratione quae at cumque.</p>
          </div>
          
        </div>
      <button onClick={() => {
        navigate(-1)
      }} >Go back</button>
      </div>
    </div>
    </>
    
  )
}

export default About
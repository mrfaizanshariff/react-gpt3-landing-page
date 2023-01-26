import React, { useState } from 'react'
import {RiMenu3Line,RiCloseLine}  from 'react-icons/ri'
import "./navBar.css";
import "../../index.css"
import logo from '../../assets/assets/logo.svg';

const Menu = ()=>( 
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#whatGpt3">What is GPT3</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )

  
const NavBar = () => {
  const [toggleMenu, setToggleMenu] =useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navabr-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
            <Menu/>
        </div>
      </div>
      <div className="gpt3_navbar-sign">
          <p><a href="#signin">Sign In</a></p>
          <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color='fff' size={27} onClick={()=>setToggleMenu(false)}/>
        :<RiMenu3Line color='fff' size={27} onClick={()=>setToggleMenu(true)} />}
        {toggleMenu &&
          (
            <div className="gpt3__navbar-menu_container scale-up-center ">
              <div className="gpt3__navbar-menu_container-links">
                <Menu/>
              </div>
              <div className="gpt3_navbar-menu_sign">
                <p><a href="#signin">Sign In</a></p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          )
        }
       
      </div>
    </div>
  )
}

export default NavBar

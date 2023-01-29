import React from 'react'
import "./App.css"
import "./index.css"
import { Blog,Features,WhatGPT3,Header,Footer,Possibility } from './containers/index'
import {Brand,Articles,CallToAction,Feature,NavBar} from "./components/index"
const App = () => {
  return (
    <div className='App gradient__bg'>
      <div >
        <NavBar/>
        <Header/>
      </div >
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CallToAction/>
      <Blog/>
      <Footer/>
    </div>
  )
}
// this is the file where we can call the different components.
// And this file gets placed in the html body inside the <div> which has id "root"
export default App

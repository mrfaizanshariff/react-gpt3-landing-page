import React from 'react'
import { Blog,Features,WhatGPT3,Header,Footer,Possibility } from './containers/index'
import {Brand,Articles,CalltoAction,Feature,NavBar} from "./components/index"
const App = () => {
  return (
    <div>
      <h1>React App</h1>
      
      <h1>
        <Blog></Blog>
        <WhatGPT3></WhatGPT3>
        </h1>
         <h2>
        <Brand></Brand>
        <Articles></Articles>
        <NavBar></NavBar>
         </h2>
         <h1>
          <h1>
            <h1>
              <h1>
                Hii
              </h1>
            </h1>
          </h1>
         </h1>
    </div>
  )
}
// this is the file where we can call the different components.
// And this file gets placed in the html body inside the <div> which has id "root"
export default App

import React from 'react'
// import {google,slack,atlassian,shopify,dropbox} from "./import"
import  google  from "../../assets/assets/google.png";
import  atlassian  from "../../assets/assets/atlassian.png";
import  dropbox  from "../../assets/assets/dropbox.png";
import  shopify  from "../../assets/assets/shopify.png";
import  slack  from "../../assets/assets/slack.png";
import './brand.css'
const brands=[google,slack,dropbox,shopify,atlassian]
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
     {brands.map(e=>(
      <div>
        <img src={e} alt={e} className="gpt3__brand-image" />
      </div>
     ))}
    </div>
  )
}

export default Brand

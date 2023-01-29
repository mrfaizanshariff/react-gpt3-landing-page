import React from 'react'
import "./whatGPT3.css"
const posts =[
  {
    title:'Chatbots',
    description:'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ',
  },{
    title:'Knowledgebase',
    description:'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },{
    title:'Education',
    description:'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },
]
const WhatGPT3 = () => {
  return (
    <div id='whatGpt3' className='gpt3__whatGPT3'>
      <div className="gpt3__whatGPT3-intro">
        <div className="gpt3__whatGPT3-intro__title">
          What is GPT-3
        </div>
        <div className="gpt3__whatGPT3-intro__verbiage">
        We so opinion friends me message as delight. 
        Whole front do of plate heard oh ought. 
        His defective nor convinced residence own. 
        Connection has put impossible own apartments boisterous. 
        At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        </div>
      </div>
      <div className="gpt3__whatGPT3-midSection">
        <div className="gpt3__whatGPT3-midSection__title gradient__text">
        The possibilities are beyond your imagination
        </div>
        <div className="gpt3__whatGPT3-midSection__link">
          <a href="#features">Explore the library</a>
        </div>
      </div>
      <div className='gpt3__whatGPT3-posts'>
        {posts.map(e=>(
          <>
          <div className='gpt3__whatGPT3-posts__container'>
           <div className='gpt3__whatGPT3-posts__title gpt3__whatGPT3-intro__title'>
            {e?.title}
           </div>
           <div className='gpt3__whatGPT3-posts__description'>
            {e?.description}
           </div>
          </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default WhatGPT3

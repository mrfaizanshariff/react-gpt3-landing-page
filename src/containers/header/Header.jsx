import React from 'react'
import "./header.css"
import people from '../../assets/assets/people.png';
import people1 from '../../assets/assets/people1.png';
import people2 from '../../assets/assets/people2.png';
import peope3 from '../../assets/assets/peope3.png';
import people4 from '../../assets/assets/people4.png';
import people5 from '../../assets/assets/people5.png';
import people6 from '../../assets/assets/people6.png';
import one6k from '../../assets/assets/one6.png';
import ai from '../../assets/assets/ai.png';
const People=()=>(
  <div className='gpt3__header-flex'>
          <img className='gpt3__header-people__position' src={people1} alt="people" />
          <img className='gpt3__header-people__position' style={{right:'15px'}} src={people2} alt="people" />
          <img className='gpt3__header-people__position' style={{right:'25px'}} src={peope3} alt="people" />
          <img className='gpt3__header-people__position' style={{right:'35px'}} src={people4} alt="people" />
          <img className='gpt3__header-people__position' style={{right:'45px'}} src={people5} alt="people" />
          <img className='gpt3__header-people__position' style={{right:'55px'}} src={people6} alt="people" />
          <div className='gpt3__header-one6k gpt3__header-people__position' style={{right:'65px'}}>
          <img className='' src={one6k} alt="people" />
          </div>
  </div>
)
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Let’s Build Something
        amazing with GPT-3
        OpenAI
        </h1>
        <p className="gradient__text-paragraph">Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all exercise blessing. 
          Indulgence way everything joy alteration boisterous the attachment. 
          Party we years to order allow asked of.</p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder='Your E-mail Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content_people">
          <People/>
          <p>
          1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header

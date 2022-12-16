import React from 'react';
import "./Faq.css"
import ig1 from "../../assests/ig5.webp";
import Button from '../Props/Button';


const Faq = () => {
  return (
    <div className='faq'>
      <div className='faq-card1'>
        <span className='c-body'>
            <h1>how to play</h1>
            <p>This HTML file is a template.
      If you open it directly in the browser</p>
            <h5>This HTML file is a template.
      If you open it directly in the browser</h5>
      <div className='Button'>
        <Button
            class="btn-small"
            name="learn more"
            />
      </div>
        </span>
      </div>
      <div className='skew1'></div>
      <div className='skew2'></div>
      <div className='faq-card2'>
        <span className='c-body'>
        <h1>FAQs</h1>
        
        <p>This HTML file is a template.
        If you open it directly in the browser</p>
        <h5>check faq section</h5>
        <div className='Button'>
        <Button
        class="btn-small"
        name="read now"
        />
        </div>
        </span>
      </div>
      <img src={ig1} alt='img'/>
      
    </div>
  )
}

export default Faq

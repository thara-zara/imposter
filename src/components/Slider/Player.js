import React from 'react';
import "./Player.css";
import count from "../../assests/count.webp"

const Player = () => {
  return (
    <div className='player'>
        <div className='play'>
            <h2>imposter </h2>
            <div className='count'>
                <img src={count} alt="img"></img>
            </div>
            
        </div>
        <div className='slide-btn'>
          <span>
            <i className='fas fa-arrow'></i>
            <i className='fas fa-arrow-right'></i>
          </span>
        </div>
    </div>
  )
}

export default Player
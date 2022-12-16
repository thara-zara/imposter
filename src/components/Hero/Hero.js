import React from 'react';
import Button from '../Props/Button';
import Nav from '../Nav/Nav';
import "./Hero.css";
import im1 from "../../assests/im1.png";
import im2 from "../../assests/im2.webp";
import game from "../../assests/game.png";
const Hero = () => {
  return(
    <div className='hero'>
      <Nav/>
        <div className='hero-head'>
           <div className='left-img'>
                <img src={im1} alt="img"/>
           </div>
           <div className='mid'>
            <h3>the play-and-earn social deduction game </h3>
            <img src={game} alt=""/>
            <div className='button'>
                <Button
            class="btn-big"
            name="buy on opensea"
            />
            </div>
            
           </div>
           <div className='right-img'>
                <img src={im2} alt="img"/>
           </div>
        </div>
    </div>
  )
}
export default Hero
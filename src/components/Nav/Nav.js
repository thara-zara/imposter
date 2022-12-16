import React from 'react';
import "./Nav.css";
import Button from '../Props/Button';

const Nav = () => {
  return (
    <div className='navbar'>
            <div className='logo'>
                <span>imposter</span>
            </div>
            <div className='nav-item'>
                <ul>
                    <li>Nft</li>
                    <li>claim</li>
                    <li>$blood</li>
                    <li>faq</li>
                    <li>docs</li>
                </ul>
            </div>
            <div className='connect-btn'>
                <Button
                class="btn-small"
                name="connect wallate"
                />
            </div>
    </div>
  )
}

export default Nav
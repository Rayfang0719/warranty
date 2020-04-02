import React, { Component } from 'react';
import './style.css'
import logo from '../../assets/logo.png';




class Header extends Component {
    render() {
        return (
            <div className="warranty__header">
                <div className="warranty__header__content">
                
                    <img className='company__logo' src={logo} alt='cyclingdeal logo'/>
                    <span className='split__line'>

                    </span>
                    <h3 className='company__name'>CYCLINGDEAL</h3>
                 </div>
            </div>
        );
    }
}

export default Header;
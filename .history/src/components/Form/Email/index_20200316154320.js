import React, { Component } from 'react';
import './style.css';
class Email extends Component {
    render() {
        return (
            <div className='warranty__email'>
                <p>EMAIL</p>
                <div className='email__section'>
                    <input type="email" name="email" id='email' placeholder='Email Address'/>
                    <span className='star'>*</span>
                </div>
            </div>
        );
    }
}

export default Email;
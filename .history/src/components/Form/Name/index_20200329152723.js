import React, { Component } from 'react';
import './style.css';
class Name extends Component {
    constructor(props){
        super(props);
       
        
    }
    render() {
        return (
            <div className='warranty__name'>
                <p>NAME</p>
                <div className='name'>
                    <div className="name__section">
                    <input type="text" name="first name" id="firstName" placeholder='First Name' />
                    <span className='star'>*</span>
                    </div>
                    <div className="name__section">
                    <input type="text" name="last name" id="lastName" placeholder='Last Name' />
                    <span className='star'>*</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Name;
import React, { Component } from 'react';
import './style.css';
import { regExpLiteral } from '@babel/types';
class Email extends Component {
    constructor(props){
        super(props);
        this.getEmailAddress = this.getEmailAddress.bind(this)
    }
    getEmailAddress(e){
        var email = e.target.value;
        var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        // if(reg.test(email))
        console.log("reg",reg.test(email));
        if(!reg.test(email)){
            document.querySelector('.email--warning').style.display = 'block';
        }else{
            this.props.getEmail(email)
        }
    }
    render() {
        return (
            <div className='warranty__email'>
                <p>EMAIL</p>
                <div className='email__section'>
                    <input type="email" name="email" id='email' placeholder='Email Address' onBlur={this.getEmailAddress}/>
                    <span className='star'>*</span>
                </div>
                <span className="email--warning">Please enter a valid email adress</span>
            </div>
        );
    }
}

export default Email;
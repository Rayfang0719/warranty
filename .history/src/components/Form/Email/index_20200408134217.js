import React, { Component } from 'react';
import './style.css';
class Email extends Component {
    constructor(props){
        super(props);
        this.getEmailAddress = this.getEmailAddress.bind(this)
        this.clearEmailFormat = this.clearEmailFormat.bind(this)
        this.state ={
            emailFormat:this.props.emailFormat
        }
    }
    clearEmailFormat(){
        this.setState({
            emailFormat:false
        })
    }
    getEmailAddress(e){
        var email = e.target.value;
        var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
       
        if(!reg.test(email)){
            this.setState({
                emailFormat:true
            })
        }
        else{
            this.setState({
                emailFormat:false
            })
            this.props.getEmail(email)
        }
    }
    render() {
        return (
            <div className='warranty__email'>
                <p>EMAIL</p>
                <div className='email__section'>
                    <input type="email" name="email" id='email' placeholder='Email Address' onBlur={this.getEmailAddress} onFocus={this.clearEmailFormat}/>
                    <span className='star'>*</span>
                </div>
                {this.props.emailWarn && <span className="warning">Please Enter Your Email Address</span>}

                {this.state.emailFormat && <span className="warning">Please Enter A Valid Email Address</span>}
            </div>
        );
    }
}

export default Email;
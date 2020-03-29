import React, { Component } from 'react';
import './style.css';
class Name extends Component {
    constructor(props){
        super(props);
       
        
    }
    getFirst(e){
        var firstName = e.target.value;
        console.log(firstName)
    }
    getLast(e){
        var lastName = e.target.value;
        console.log(lastName)
    }
    render() {
        return (
            <div className='warranty__name'>
                <p>NAME</p>
                <div className='name'>
                    <div className="name__section">
                    <input type="text" name="first name" id="firstName" placeholder='First Name' onBlur={this.getFirst.bind()} />
                    <span className='star'>*</span>
                    </div>
                    <div className="name__section">
                    <input type="text" name="last name" id="lastName" placeholder='Last Name' onBlur={this.getLast.bind()}/>
                    <span className='star'>*</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Name;
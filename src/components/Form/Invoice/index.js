import React, { Component } from 'react';
import './style.css'

class Invoice extends Component {
    render() {
        return (
            <div className='warranty__invoice'>
                <p>INVOICE / ORDER NUMBER</p>
                <input type='text' placeholder='Invoice NO.' id='invoice'/>
                <span style={{color:'#f00'}} className='star'>*</span>
                
            </div>
        );
    }
}

export default Invoice;
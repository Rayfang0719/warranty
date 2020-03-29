import React, { Component } from 'react';
import './style.css'

class Invoice extends Component {
    constructor(props){
        super(props);
        
        this.getInvoice = this.getInvoice.bind(this);
     
    }
    render() {
        return (
            <div className='warranty__invoice'>
                <p>INVOICE / ORDER NUMBER</p>
                <input type='text' placeholder='Invoice NO.' id='invoice' onBlur={this.getInvoice}/>
                <span style={{color:'#f00'}} className='star'>*</span>
                
            </div>
        );
    }
}

export default Invoice;
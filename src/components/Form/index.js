import React, { Component } from 'react';
import warrantyBG from '../../assets/warranty_bg.png'

class Form extends Component {
    render() {
        return (
            <div>
                <img src={warrantyBG}/>
                <div className='warranty__content'>
                    <h2>WARRANTY FORM</h2>
                    <hr/>
                    <div className="warranty__country">
                        <p>COUNTRY</p>
                        <label>
                        <input type="radio"  name="country" value="USA" checked/>
                        
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
import React, { Component } from 'react';
import warrantyBG from '../../assets/warranty_bg.png';
import './style.css'
import Country from './Country';
import Name from './Name'
import Email from './Email'
import Marketplace from './Marketplace'
import Invoice from './Invoice'


class Form extends Component {
    render() {
        return (
            <div>
                <img src={warrantyBG}/>
                <div className='warranty__content'>
                    <h2>WARRANTY FORM</h2>
                    
                    <hr/>
                   
                  <Country/>
                  <Name/>
                  <Email/>
                  <Marketplace/>
                  <Invoice />
                  {/* subscription */}
                  <div className='subscribe'>
                      <input type='checkbox' id='subscribe'/>
                      <label for='subscribe' className='subscribe__content'>
                          <h5>Subscribe to our newsletter</h5>
                          <p>Join our subscribers list to get Free items, test Give-Aways, promotion offers and latest news.</p>
                      </label>
                  </div>
                  {/* end of subscription */}
                  <div className="warranty__subscribe__button">
                        <button>SUBMIT</button>
                  </div>
                </div>
            </div>
        );
    }
}

export default Form;
import React, { Component } from 'react';
import './style.css';
import USA from '../../../assets/usa.png'
import AU from '../../../assets/au.jpg'
import CA from '../../../assets/ca.png'
import UK from '../../../assets/uk.png'
import JP from '../../../assets/jp.png'

class Country extends Component {
    render() {
        return ( 
            <div className="warranty__country">
            <p>COUNTRY</p>
            <div className="country__list">
            <label className='country__section'>
            <input type="radio"  name="country" value="USA" defaultChecked/>
            <img src={USA} className='country__flag'/>
            <p>USA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="AU" defaultChecked/>
            <img src={AU} className='country__flag'/>
            <p>AUSTRALIA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="CA" defaultChecked/>
            <img src={CA} className='country__flag'/>
            <p>CANADA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="UK" defaultChecked/>
            <img src={UK} className='country__flag'/>
            <p>UK</p>
            </label>
            <label className='country__section'> 
            <input type="radio"  name="country" value="JP" defaultChecked/>
            <img src={JP} className='country__flag'/>
            <p>JAPAN</p>
            </label>
            <label className='country__section'> 
            <input type="radio"  name="country" value="OTHER" defaultChecked/>
            <h3>others</h3>
            </label>

            </div>
        </div>
        );
    }
}

export default Country;
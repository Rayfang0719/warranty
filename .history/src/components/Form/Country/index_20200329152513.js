import React, { Component } from 'react';
import './style.css';
import USA from '../../../assets/usa.png'
import AU from '../../../assets/au.jpg'
import CA from '../../../assets/ca.png'
import UK from '../../../assets/uk.png'
import JP from '../../../assets/jp.png'
// import 'bootstrap/dist/css/bootstrap.css';
class Country extends Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
        
    }
    handleChange(event){
        let item = event.target.value;
        this.props.getCountry(item);
    }
    render() {
        return ( 
            <div className="warranty__country">
            <p>COUNTRY</p>
            <div className="country__list">
            <label className='country__section'>
            <input type="radio"  name="country" value="USA"  onChange={this.handleChange.bind(this)}/>
            <img src={USA} className='country__flag'/>
            <p>USA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="AU" onChange={this.handleChange.bind(this)}/>
            <img src={AU} className='country__flag'/>
            <p>AUSTRALIA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="CA"  onChange={this.handleChange.bind(this)}/>
            <img src={CA} className='country__flag'/>
            <p>CANADA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="UK" onChange={this.handleChange.bind(this)}/>
            <img src={UK} className='country__flag'/>
            <p>UK</p>
            </label>
            <label className='country__section'> 
            <input type="radio"  name="country" value="JP"  onChange={this.handleChange.bind(this)}/>
            <img src={JP} className='country__flag'/>
            <p>JAPAN</p>
            </label>
            <label className='country__section'> 
            <input type="radio"  name="country" value="OTHER" onChange={this.handleChange.bind(this)}/>
            <h3>others</h3>
            </label>

            </div>
        </div>
        );
    }
}

export default Country;
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
        console.log(props)
       this.handleChange=this.handleChange.bind(this);
    //    this.state = {countryWarn:this.props.countryWarn}
        
    }
    handleChange(event){
        let item = event.target.value;
        this.props.getCountry(item);
        console.log(document.querySelectorAll(".country__section"))
        document.querySelectorAll(".country__section").map((item)=>{
            item.classList.remove("border--yellow");
        })
        // document.querySelectorAll(".country__list").classList.remove("border--yellow");
        event.target.parentElement.classList.add("border--yellow");
    }
    render() {
        return ( 
            <div className="warranty__country">
            <p>COUNTRY</p>
            <div className="country__list">
            <label className='country__section '>
            <input type="radio"  name="country" value="USA"  onChange={this.handleChange}/>
            <img src={USA} className='country__flag' alt='USA flag'/>
            <p>USA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="AU" onChange={this.handleChange}/>
            <img src={AU} className='country__flag' alt='AU flag'/>
            <p>AUSTRALIA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="CA"  onChange={this.handleChange.bind(this)}/>
            <img src={CA} className='country__flag' alt='CA flag'/>
            <p>CANADA</p>
            </label>
            <label className='country__section'>
            <input type="radio"  name="country" value="UK" onChange={this.handleChange.bind(this)}/>
            <img src={UK} className='country__flag' alt='UK flag'/>
            <p>UK</p>
            </label>
            <label className='country__section'> 
            <input type="radio"  name="country" value="JP"  onChange={this.handleChange.bind(this)}/>
            <img src={JP} className='country__flag' alt='JP flag'/>
            <p>JAPAN</p>
            </label>
            <label className='country__section'> 
            <input type="radio"  name="country" value="OTHER" onChange={this.handleChange.bind(this)}/>
            <h3>others</h3>
            </label>

            </div>
        {this.props.countryWarn && <span className='warning'>Please Choose Your Country</span>}
        {/* <span className='warning'>Please Choose Your Country</span> */}
       </div>
        );
    }
}

export default Country;
import React, { Component } from 'react';
import warrantyBG from '../../assets/warranty_bg.png';
import './style.css'
import Country from './Country';
import Name from './Name'
import Email from './Email'
import Marketplace from './Marketplace'
import Invoice from './Invoice'


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            country:'',
            firstName:'',
            lastName:'',
            email:'',
            marketPlace:'',
            invoiceNum:'',
            subscribe:false
        };
        this.getCountry=this.getCountry.bind(this);
        this.getName = this.getName.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getMarket = this.getMarket.bind(this);
    
    };
    getCountry(val){
        console.log('the country chosen is',val)
        this.setState({
            country:val
        });

    };
    getName(firstName,lastName){
      
        this.setState({
            name:{firstName,lastName}
        },()=>{
            console.log(this.state.name)
        });
        
    };
   getEmail(val){
        this.setState({
            email:val
        });
    };
  getMarket(val){
        this.setState({
            marketPlace:val
        })
    };
        

    render() {
        return (
            <div>
                <img src={warrantyBG} className='banner'/>
                <div className='warranty__content'>
                    <h2>WARRANTY FORM</h2>
                    
                    <hr/>
                   
                  <Country getCountry ={this.getCountry}/>
                  <Name getName={this.getName}/>
                  <Email getEmail={this.getEmail}/>
                  <Marketplace getMarket={this.getMarket}/>
                  <Invoice />
                  {/* subscription */}
                  <div className='subscribe'>
                      <input type='checkbox' id='subscribe'/>
                      <label htmlFor='subscribe' className='subscribe__content'>
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
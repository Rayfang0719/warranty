import React, { Component } from 'react';
import warrantyBG from '../../assets/warranty_bg.png';
import './style.css'
import Country from './Country';
import Name from './Name'
import Email from './Email'
import Marketplace from './Marketplace'
import Invoice from './Invoice'
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            name: '',
            email: '',
            marketPlace: 'Amazon',
            invoiceNum: '',
            subscribe: false,
            marketPlaceList: [],
            countryWarn:false,
            firstNameWarn:false,
            lastNameWarn:false,
            emailWarn:false,
            invoiceNumWarn:false
        };
        this.getCountry = this.getCountry.bind(this);
        this.getName = this.getName.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getMarket = this.getMarket.bind(this);
        this.getInvocie = this.getInvocie.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscribe = this.subscribe.bind(this);

    };
    handleSubmit(e) {
        e.preventDefault();
        var { country, name, email, marketPlace, invoiceNum} = this.state;
        let params = { country, name, email, marketPlace, invoiceNum} ;
        console.log(params)
       switch(true){
           case !country:
               this.setState({
                   countryWarn:true
               });
               
               break;
            case !name.firstName:
               this.setState({firstNameWarn:true})
               break;
            case !name.lastName:
                    this.setState({lastNameWarn:true})
                    break;
            case !email:
                    this.setState({emailWarn:true})
                    break;
            case !invoiceNum:
                    this.setState({invoiceNumWarn:true})
                    break;
            default:
                    this.props.formSubmit();
                    axios.get('http://localhost:5858/warranty', { params }).then(res => {
                     console.log(res)
        })
       }
       
    }
    getCountry(val) {
        this.setState({
            country: val
        }, () => {
            switch (val) {
                case 'USA':
                    this.setState({
                        marketPlaceList: ['Amazon', 'eBay', 'Walmart', 'Jet', 'Overstocks', 'CyclingDeal USA Website', 'Shops', 'Others']
                    })
                    break;
                case 'AU':
                    this.setState({
                        marketPlaceList: ['Amazon', 'eBay', 'Catch', 'Kogan', 'MyDeal', 'CyclingDeal AU Website', 'Shops', 'Others']
                    })
                    break;

                case 'CA':
                    this.setState({
                        marketPlaceList: ['Amazon', 'Cyclingdeal USA', 'Cyclingdeal AU', 'Others']
                    })
                    break;

                case 'UK':
                    this.setState({
                        marketPlaceList: ['Amazon', 'Cyclingdeal USA', 'Cyclingdeal AU', 'Others']

                    })
                    break;
                case 'JP':
                    this.setState({
                        marketPlaceList: ['Amazon', 'Cyclingdeal USA', 'Cyclingdeal AU', 'Others']

                    })
                    break;

                case 'OTHER':
                    this.setState({
                        marketPlaceList: ['Amazon', 'Trademe', 'Cyclingdeal USA', 'Cyclingdeal AU', 'Others']
                    })
                    break;
                default:
                    break;

            }
        });


    };
    getName(first, last) {

        this.setState({
            name: { firstName: first, lastName: last }
        }, () => {
        });

    };
    getEmail(val) {
        this.setState({
            email: val
        });
    };
    getMarket(val) {
        this.setState({
            marketPlace: val
        })
    };
    getInvocie(val) {
        this.setState({
            invoiceNum: val
        }, () => {
        })
    };
    subscribe(e) {
        this.setState({
            subscribe: e.target.checked
        })
    }


    render() {
        return (
            <div>
                <img src={warrantyBG} className='banner' alt='banner' />
                <form className='warranty__content' onSubmit={this.handleSubmit}>
                    <h2>WARRANTY FORM</h2>

                    <hr />

                    <Country getCountry={this.getCountry} countryWarn={this.state.countryWarn} />
                    <Name getName={this.getName}  firstNameWarn = {this.state.firstNameWarn} lastNameWarn ={this.state.las
                        t}/>
                    <Email getEmail={this.getEmail} emailWarn = {this.state.emailWarn}/>
                    <Marketplace getMarket={this.getMarket} marketPlaceList={this.state.marketPlaceList} />
                    <Invoice getInvocie={this.getInvocie} invoiceNumWarn = {this.state.invoiceNumWarn}/>
                    {/* subscription */}
                    <div className='subscribe'>
                        <input type='checkbox' id='subscribe' onChange={this.subscribe} />
                        <label htmlFor='subscribe' className='subscribe__content'>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Join our subscribers list to get Free items, test Give-Aways, promotion offers and latest news.</p>
                        </label>
                    </div>
                    {/* end of subscription */}
                    <div className="warranty__subscribe__button">
                        <button type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;

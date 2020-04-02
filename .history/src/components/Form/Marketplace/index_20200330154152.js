import React, { Component } from 'react';
import './style.css';
class Marketplace extends Component {
    constructor(props){
        super(props);
        this.getSaleChanle = this.getSaleChanle.bind(this);
     
    }
    getSaleChanle(e){
        this.props.getMarket(e.target.value)
    }
    render() {
        return (
            <div className='warranty__marketplace'>
                <p>Marketplace</p>
                
               <select id='market' onChange={this.getSaleChanle}>
                   {
                       this.props.marketPlaceList.map((item,num)=>{
                           return <option key={num}>{item}</option>
                       })
                   }
                {/* <option>Amazon</option>
                <option>Ebay</option>
                <option>Cyclingdeal AU</option>
                <option>Cyclingdeal USA</option>
                <option>Trademe</option> */}

               </select>
            </div>
        );
    }
}

export default Marketplace;
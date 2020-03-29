import React, { Component } from 'react';
import './style.css';
class Marketplace extends Component {
    constructor(props){
        super(props);
        console.log('marketplacelist',props.marketPlaceList)
    }
    render() {
        return (
            <div className='warranty__marketplace'>
                <p>Marketplace</p>
                
               <select id='market' marketPlaceList = {this.props.marketPlaceList}>
                   {
                       marketPlaceList.map(function(item){
                           return <option>{item}</option>
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
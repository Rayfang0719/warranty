import React, { Component } from 'react';
import './style.css';
class Marketplace extends Component {
    render() {
        return (
            <div className='warranty__marketplace'>
                <p>Marketplace</p>
                
               <select id='market'>
                <option>Amazon</option>
                <option>Ebay</option>
                <option>Cyclingdeal AU</option>
                <option>Cyclingdeal USA</option>
                <option>Trademe</option>

               </select>
            </div>
        );
    }
}

export default Marketplace;
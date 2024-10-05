import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    // console.log(props);
    
    if (!product) {
        return <div className="breadcrum">Product details not available</div>;
    }

    return (
        <div className='breadcrum'>
           HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
           
        </div>
    );
}

export default Breadcrum;
import React, { useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {

    const { addTocart } = useContext(ShopContext); // useContext to get addTocart
    const { product } = props;

    if (!product) {
        return <p>Loading...</p>; // Add a fallback in case the product is not passed
    }

    return (
        <div className='product-display'>
            <div className="left">
                <div className="image-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="display-image">
                    <img className='main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="display-right">
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_icon} alt="Star Icon" />
                    <img src={star_dull_icon} alt="Star Dull Icon" />
                    <p>(122)</p>
                </div>
                <div className="prices">
                    <div className="old-price">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>
                <div className="desc">
                    Men's Classic Denim Jacket: A timeless wardrobe staple, this denim jacket offers a relaxed fit, faded wash, and durable cotton construction. Perfect for layering and casual wear, it combines comfort and style effortlessly.
                </div>
                <div className="size">
                    <h1>Select size</h1>
                    <div className="sizes">
                        <div>Small</div>
                        <div>Medium</div>
                        <div>Large</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addTocart(product.id)}>Add to cart</button>
                <p className='right-category'><span>Category :</span>Women -shirt, Crop Top</p>
                <p className='right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;

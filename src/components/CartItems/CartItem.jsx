import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItem = () => {
    const { all_product,getTotalCartAmount, cartItem, addTocart, removeFromcart } = useContext(ShopContext);

    return (
        <div className='cart'>
            <div className="format">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((product) => {
                if (cartItem[product.id] > 0) {  // Check if the quantity is greater than 0
                    return (
                        <div key={product.id}>
                            <div className="itemFormat format">
                                <img className='icons' src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className='quantity'>{cartItem[product.id]}</button>
                                <p>${product.new_price * cartItem[product.id]}</p>

                                <img 
                                    src={remove_icon} 
                                    className='remove' 
                                    onClick={() => removeFromcart(product.id)} 
                                    alt="Remove" 
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; 
            })}
            <div className="cartItemsDown">
                <div className="total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="totalItem">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="totalItem">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="totalItem">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Procced To Checkout</button>
                </div>
                <div className="promoCode">
                    <p>If you have promo code , Enter it Here</p>
                    <div className='promoBox'>
                        <input type="text" placeholder='promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('Shop');
    const {getTotalCartItems}=useContext(ShopContext)

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>Ashiket</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu('Shop')}>
                    <Link to='/' style={{textDecoration:'none'}}>Shop</Link>
                    {menu === 'Shop' ? <hr /> : " "}
                </li>
                <li onClick={() => setMenu('Men')}>
                    <Link to='/mens' style={{textDecoration:'none'}}>Men</Link>
                    {menu === 'Men' ? <hr /> : " "}
                </li>
                <li onClick={() => setMenu('Women')}>
                    <Link to='/womens' style={{textDecoration:'none'}}>Women</Link>
                    {menu === 'Women' ? <hr /> : " "}
                </li>
                <li onClick={() => setMenu('Kids')}>
                    <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>
                    {menu === 'Kids' ? <hr /> : " "}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;

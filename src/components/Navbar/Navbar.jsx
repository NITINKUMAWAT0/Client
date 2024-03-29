

import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Logo from '../../img/Logo.png'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Navbar = () => {
const [open , setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className ="link" to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <img src={Logo} alt="" className='logo'/>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <FaSearch/>
            <FaUser/>
            <FaHeart/>
            <div className="cartIcon" onClick={()=>setOpen(!open)} >
              <FaShoppingBag/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;

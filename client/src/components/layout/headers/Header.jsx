import React, { useState, useContext } from "react";
//icons
import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
//
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
    return (
        <header className='navbar'>
            <div className='menu'>
                <FiMenu size={30} />
            </div>
            <div className='logo'>
                <h1>
                    <Link to='/'>SHOP</Link>
                </h1>
            </div>
            <ul>
                <li>
                    <Link to='/'>Products</Link>
                </li>
                <li>
                    <Link to='/signin'>Login | Register</Link>
                </li>
                <li>
                    <GrFormClose className='menu' size={30} />
                </li>
            </ul>
            <div className='cart'>
                <span>0</span>
                <Link to='/cart'>
                    <FaShoppingCart size={30} />
                </Link>
            </div>
        </header>
    );
};

export default Header;

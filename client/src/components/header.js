import React, { useState, useContext } from "react";
import { GlobalState } from "../globalState";
import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Header = () => {
    const value = useContext(GlobalState);
    return (
        <header>
            <Link to='/'>
                <h1>LOGO</h1>
            </Link>
            <FiMenu className='' />

            <RiShoppingCart2Fill className='' />
            <ul>
                <li>
                    <Link to='/'>Product</Link>
                </li>
                <li>
                    <Link to='/login'>login/register</Link>
                </li>
                <li>
                    <GrFormClose className='' />
                </li>
            </ul>
            <div></div>
        </header>
    );
};

export default Header;

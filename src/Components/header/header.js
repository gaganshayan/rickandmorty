import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

 const Header = (props) => {

    return (
    <nav>
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <div className="logo">
                    <Link to="/video"><img src="https://res.cloudinary.com/dtybx6nov/image/upload/v1602020674/RANDOM_xapvam.png" className="logo"></img></Link>
                </div>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
    
        </ul>
    </nav>)


 }

 export default Header;
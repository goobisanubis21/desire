import React from 'react';
import AlphaImg from "./alphawaveHeader.png";
import "./header.css";

function Header() {
    return (
        <div>
            <div className="header">
                <img src={AlphaImg} alt="alphawave"></img>
            </div>
        </div>
    )
}

export default Header

import React from 'react';
import DesireImg from "./desireHeader.png";
import "./header.css";

function Header() {
    return (
        <div>
            <div className="header">
                <img src={DesireImg} alt="desiire"></img>
            </div>
        </div>
    )
}

export default Header

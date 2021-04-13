import React from 'react';
import ShirtsImg from "./shirtsImg.png";
import "./homeComp.css"

function HomeComp() {
    return (
        <div>
            <div className="shirtsImgDiv">
                <img className="shirtsImg" src={ShirtsImg} alt="shirtsImg"></img>
            </div>
        </div>
    )
}

export default HomeComp

import React from 'react';
import "./homeComp.css"
import Header from "../Header/Header";
import RaceBlack from "./alphawave1.jpg";
import RaceWhite from "./alphawave2.jpg";
import TwoEyesBlack from "./alphawave4.jpg";
import TwoEyesWhite from "./alphawave5.jpg";
import Pyramid from "./alphawave7.jpg";
import EyeCheck from "./alphawave8.jpg";
// import Palm from "./alphawave9.jpg";

function HomeComp() {
    return (
        <div>
            <Header />
            <div className="homeDiv">
                <div className="underHeaderText">
                    <p>first release now available</p>
                </div>
                <div className="shirtDivs">
                    <img className="shirts" src={RaceBlack} alt="race black"></img>
                    <img className="shirts" src={RaceWhite} alt="race white"></img>
                </div>
                <div className="shirtDivs">
                    <img className="shirts" src={TwoEyesBlack} alt="two eye black"></img>
                    <img className="shirts" src={TwoEyesWhite} alt="two eyes white"></img>
                </div>
                <div className="shirtDivs">
                    <img className="shirts" src={EyeCheck} alt="eye check5"></img>
                    <img className="shirts" src={Pyramid} alt="pyramid"></img>
                </div>
                {/* <div className="shirtDivs">
                    <img className="shirts" src={Palm} alt="palm tree"></img>
                </div> */}
            </div>
        </div>
    )
}

export default HomeComp

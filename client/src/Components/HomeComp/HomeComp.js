import React from 'react';
import "./homeComp.css"
import Header from "../Header/Header";
import RaceBlack from "./alphawave1.jpg";
import RaceWhite from "./alphawave2.jpg";
import TwoEyesBlack from "./alphawave4.jpg";
import TwoEyesWhite from "./alphawave5.jpg";
import Pyrimad from "./alphawave7.jpg";
import EyeCheck from "./alphawave8.jpg";
// import Palm from "./alphawave9.jpg";

function HomeComp() {
    return (
        <div>
            <Header />
            <div>
                <div className="underHeaderText">
                    <p>first release now available</p>
                </div>
                <div className="shirtDivs">
                    <img className="raceFront" src={RaceBlack} alt="raceBlack"></img>
                    <img className="raceFront" src={RaceWhite} alt="raceFront"></img>
                </div>
                <div className="shirtDivs">
                    <img className="raceFront" src={TwoEyesBlack} alt="raceBlack"></img>
                    <img className="raceFront" src={TwoEyesWhite} alt="raceFront"></img>
                </div>
                <div className="shirtDivs">
                    <img className="raceFront" src={EyeCheck} alt="raceFront"></img>
                    <img className="raceFront" src={Pyrimad} alt="raceBlack"></img>
                </div>
                {/* <div className="shirtDivs">
                    <img className="raceFront" src={Palm} alt="raceFront"></img>
                </div> */}
            </div>
        </div>
    )
}

export default HomeComp

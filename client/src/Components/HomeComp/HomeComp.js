import React from 'react';
import "./homeComp.css"
import Header from "../Header/Header";
import RaceBack from "./race-back.png";

function HomeComp() {
    return (
        <div>
            <Header />
            <div className="underHeaderText">
                <p>first release now available</p>
                <img className="raceBack" src={RaceBack} alt="raceBlack"></img>
            </div>
        </div>
    )
}

export default HomeComp

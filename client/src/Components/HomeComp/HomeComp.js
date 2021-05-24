import React from 'react';
import "./homeComp.css"
import Header from "../Header/Header"

function HomeComp() {
    return (
        <div>
            <Header />
            <div className="underHeaderText">
                <p>first release now available</p>
            </div>
        </div>
    )
}

export default HomeComp

import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div>
            <div className="footerElements">
                <div className="footerList">
                    <a href="/contact"><li>Contact</li></a>
                    <a href="/shipping"><li>Shipping</li></a>
                    <a href="/exchanges"><li>Exchanges / Returns</li></a>
                    <a href="/privacy"><li>Privacy Policy</li></a>
                    <a href="/storepolicy"><li>Store Policy</li></a>
                </div>
            </div>
        </div>
    )
}

export default Footer

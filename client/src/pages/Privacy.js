import React from 'react';
import "./exchanges.css";

function Privacy() {
    return (
        <div>
            <div className="exchanges">
                <p className="exchangeTitle">
                    Privacy Policy
                </p>
                <p className="lines">
                    When you make a purchase or attempt to make a purchase through our site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, PayPal information, and other possible methods of payment and the corresponding information), email address, and phone number.
                </p>
                <p className="lines2">
                    We use the order information that we collect generally to fulfill any orders placed through our site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this order information to communicate with you, screen our orders for potential risk or fraud, and when in line with your preferences, provide you with information or advertising relating to our products.
                </p>
                <p className="lines2">
                    When you place an order through our site, we will maintain your order information for our records unless and until you ask us to delete this information.
                </p>
                <p className="lines2">
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                </p>
                <p className="lines2">
                    If you have any questions, please feel free to contact us.
                </p>
            </div>
        </div>
    )
}

export default Privacy

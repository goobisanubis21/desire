import React from 'react';
import "./exchanges.css"

function Exchanges() {
    return (
        <div>
            <div className="exchanges">
                <p className="exchangeTitle">
                    Exchanges & Returns
                </p>
                <p className="lines">
                    Merchandise must be returned or exchanged within 30 days.
                </p>
                <p className="lines2">
                    Merchandise must be unworn, and unaltered in any way and have all original tags attached.
                </p>
                <p className="lines2">
                    Merchandise returned without the original tags or showing signs of wear may not qualify for a refund.
                </p>
                <p className="lines2">
                    Shipping and handling charges are not refundable.
                </p>
                <p className="lines2">
                    When returning or exchanging, the shipping and handling charges of the return are the responsibility of the customer making the return.
                </p>
                <p className="lines2">
                    Final Sale items may not be returned.
                </p>
                <p className="lines2">
                    Once your return has been received and processed, your refund will be completed via the original payment method, excluding the delivery costs.
                    <br />
                    <span>We will keep you updated on the process of your return.</span>
                </p>
                <p className="lines2">
                    If you have any questions about Exchanges & Returns, please feel free to contact us.
                </p>
            </div>
            {/* <div className="exchanges lines2">
                <a href="/">Back</a>
            </div> */}
        </div >
    )
}

export default Exchanges

import React from 'react';
import "./contactComp.css";

function ContactComp() {
    return (
        <div>
            <div className="contactDiv">
                <form className="contactForm">
                    <input className="firstNameInput" type="text" placeholder="First Name"></input>
                    <input className="lastNameInput" type="text" placeholder="Last Name"></input>
                    <input className="emailInput" type="email" placeholder="Email"></input>
                    <textarea className="textareaInput" type="text" placeholder="Question/Comments"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactComp

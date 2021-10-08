import React from 'react';

// Import Local Files
import PizzaLeft from '../assests/pizzaLeft.jpg';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="smallDiv">
                <div className="outerContainer" style={{ backgroundImage: `url(${PizzaLeft})`, width: "100%" }}>
                    <div className="innerContainer">
                        <h1>
                            CONTACT US
                        </h1>
                        <form id="contact-form" method="POST" >
                            <input placeholder="Enter full name..." name="name" type="text" />
                            <input placeholder="Enter email..." name="email" type="email" />
                            <textarea rows="6" placeholder="Enter message..." name="message" required ></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>

            <div className="rightSide">
                <h1>
                    CONTACT US
                </h1>
                <form id="contact-form" method="POST" >
                    <label htmlFor="name">Full Name</label>
                    <input placeholder="Enter full name..." name="name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input placeholder="Enter email..." name="email" type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message..." name="message" required ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

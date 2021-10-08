import React from 'react';

// Import local files
import MultiplePizza from '../assests/multiplePizzas.jpeg';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizza})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis pretium purus. Aliquam augue leo,
                    ultricies in sodales dignissim, ultricies volutpat purus. Vestibulum in eleifend eros, vitae sollicitudin
                    tellus. Morbi sit amet ex lacinia, dignissim est in, eleifend dolor. Duis tempus magna et elementum bibendum.
                    Nulla ornare vestibulum sagittis. Duis dapibus scelerisque ante, id aliquam augue congue vitae. Integer
                    faucibus interdum dolor ac euismod. Aenean et eleifend tortor, ac posuere ipsum. Vivamus ut nulla sit amet
                    dui commodo aliquam. Quisque id suscipit erat. Quisque ullamcorper, orci ac tincidunt cursus, nunc turpis
                    luctus neque, sit amet ullamcorper sapien augue sed nulla. Mauris tempor libero condimentum odio rutrum, a
                    mollis mi ullamcorper. Sed eu arcu ante. Suspendisse faucibus tellus mi, nec eleifend nibh eleifend et.
                </p>
            </div>
        </div>
    )
}

export default About

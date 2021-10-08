import React from 'react';
import { Link } from 'react-router-dom'

// Import Local Files
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="homeDiv">
            <div className="headerContainer">
                <h1>Momina's Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu">
                    <button>
                        ORDER NOW
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Home

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content fade-in-up">
                <h1>Dancing Mountain Villa</h1>
                <p>Experience Serenity in Nature's Embrace</p>
                <a href="#rooms" className="btn hero-btn">
                    Explore Our Rooms
                </a>
            </div>
        </section>
    );
};

export default Hero;

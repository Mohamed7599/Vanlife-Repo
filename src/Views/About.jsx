import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about-header-image-1.jpg';

const About = () => {
    return (
        <>
            <nav>
                <Link to='/'> <span className='logo'>#vanlife</span></Link>
                <div className='links'>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/vans' className='nav-item'>Vans</Link>
                </div>
            </nav>
            <section className='about'>
                <img src={aboutImg} alt="" />
                <div className='about-content'>
                    <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental.
                        Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className='explore'>
                    <h2>Your destination is waiting.
                        <br />
                        Your van is ready.</h2>
                    <button>Explore our vans</button>

                </div>
            </section>
        </>
    );
}

export default About;

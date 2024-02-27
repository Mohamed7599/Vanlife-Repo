import React from 'react';
import { Link } from 'react-router-dom'
import useVans from '../../HOOKS/UseVans.jsx';
const Vans = () => {
    const vans = useVans();
    const vanElement = vans.map((van) => {
        return (
            <div className='van-card' key={van.id}>
                <img src={van.imageUrl} alt="van-image" />
                <div className='card-content'>
                    <h3>{van.name} </h3>
                    <p className='price'>{van.price}$ <br /> <span> /day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        );
    }
    );
    return (
        <>
            <nav>
                <Link to='/'> <span className='logo'>#vanlife</span></Link>
                <div className='links'>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/vans' className='nav-item'>Vans</Link>
                </div>
            </nav>
            <h2>Explore our van options</h2>
            <div className='vans-container'>
                {vanElement}
            </div>
        </>
    );
}

export default Vans;

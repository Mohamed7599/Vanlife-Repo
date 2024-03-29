import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useVans from '../../HOOKS/UseVans.jsx';
const Vans = () => {
    const navigate = useNavigate();
    const vans = useVans();
    const vanElement = vans.map((van) => {
        return (
            <div className='van-card' key={van.id}>
                <img src={van.imageUrl} alt="van-image" />
                <div>
                    <div className='card-content-about'>
                        <h3 onClick={() => { navigate(`/vans/${van.id}`) }}>{van.name} </h3>
                        <p className='price'>{van.price}$ <br /> <span> /day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </div>
        );
    }
    );
    return (
        <div className='vans'>
            <nav>
                <Link to='/'> <span className='logo'>#vanlife</span></Link>
                <div className='links'>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/vans' className='nav-item'>Vans</Link>
                </div>
            </nav>
            <h2 className='vans-title'>Explore our vans options</h2>
            <div className='vans-container'>
                {vanElement}
            </div>
        </div>
    );
}

export default Vans;

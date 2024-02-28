import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useVansData from '../../HOOKS/UseVans';
import { FaArrowLeftLong } from "react-icons/fa6";


const VansDetails = () => {
    const { id } = useParams();
    const van = useVansData(id);
    console.log(van);
    return (
        <>
            <nav>
                <Link to='/'> <span className='logo'>#vanlife</span></Link>
                <div className='links'>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/vans' className='nav-item'>Vans</Link>
                </div>
            </nav>
            <div className='van-details-container'>
                <Link to={'/vans'}>
                    <div className='back-nav'>
                        <FaArrowLeftLong />
                        <span>Back to Vans</span>
                    </div>
                </Link>
                <img src={van.imageUrl} alt="van-image" />
                <div className='van-details-content'>
                    <h3>{van.name}</h3>
                    <p className='price'>{van.price}$ <span> /day</span></p>
                    <p>{van.description}</p>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
                <button>Rent this van</button>
            </div>
        </>
    );
}

export default VansDetails;

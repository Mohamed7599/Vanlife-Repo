import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header>
            <nav>
                <Link to='/'> <span className='logo'>#vanlife</span></Link>
                <div className='links'>
                    <Link to='/about' className='nav-item'>About</Link>
                    <Link to='/vans' className='nav-item'>Vans</Link>
                </div>
            </nav>
            <div className='hero'>
                <div className='hero-content'>
                    <h3 className='hero-header'>You got the travel plans, we got the travel vans.</h3>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button>Find your Van</button>
                </div>
            </div>
        </header>
    );
}

export default Home;

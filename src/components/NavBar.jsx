import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

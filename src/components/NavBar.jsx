import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/blogs">BLOGS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

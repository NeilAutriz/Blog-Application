import '../styles/Footer.css';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Footer = () => {
    const { width } = useContext(DataContext);

    const handleIconShift = (width) => {
        if(width <= 768){
            return(<FaMobileAlt />)
        } else if( width > 768 && width < 992 ){
            return(<FaTabletAlt />)
        } else {
            return(<FaLaptop />)
        }
    }

    return (
        <footer className="footer-container">
            <p>&copy; 2024 Codeavor Blog. All Rights Reserved  {handleIconShift(width)}</p>
        </footer>
    );
};

export default Footer;

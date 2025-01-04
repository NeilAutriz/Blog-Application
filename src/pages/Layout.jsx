import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = ({width}) => {
    return(
        <div className="layout-container">
            <Header />
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer width={ width }/>
        </div>
    )
}

export default Layout;
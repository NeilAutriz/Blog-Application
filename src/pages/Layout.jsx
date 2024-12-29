import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <div className="layout-container">
            <Header />
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
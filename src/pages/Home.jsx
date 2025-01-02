import '../styles/Home.css';
import { Link } from 'react-router-dom';
import HomeCard from '../components/HomeCard';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <img 
                    className="hero-image" 
                    src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Programming setup" 
                />
                <div className="overlay">
                    <h1 className="hero-title">Start your Blog Today</h1>
                    <p className="hero-subtitle">Streamline your thoughts. Share your world.</p>
                </div>
            </div>

            {/* Intro Section */}
            <div className="intro-section">
                <h1>Welcome to Codeavor Blog</h1>
                <p>
                    Codeavor Blog is a platform built for creators to share, edit, and manage their blogs effortlessly. 
                    Engage with your audience and showcase your voice with simplicity and elegance.
                </p>
            </div>

            {/* Featured Blogs */}
            <div className="featured-section">
            <h1>Featured Blogs</h1>
                <div className="blog-cards">
                    <HomeCard title={'Web Development Tips'} details={"10 actionable tips to enhance your web development skills in 2024."} />
                    <HomeCard title={'Design for Creators'} details={'How to design visually stunning blogs that captivate readers.'}/>
                    <HomeCard title={'SCRUM Development'} details={'10 actionable tips to enhance your web development skills in 2024.'}/>
                    <HomeCard title={'Web Development Tips'} details={"10 actionable tips to enhance your web development skills in 2024."} />
                    <HomeCard title={'Design for Creators'} details={'How to design visually stunning blogs that captivate readers.'}/>
                    <HomeCard title={'SCRUM Development'} details={'10 actionable tips to enhance your web development skills in 2024.'}/>
                    <HomeCard title={'SCRUM Development'} details={'10 actionable tips to enhance your web development skills in 2024.'}/>
                    
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="cta-section">
                <h1>Start Your Blogging Journey</h1>
                <p>Codeavor Blog makes blogging simple and rewarding. Join us today!</p>
                <button className="cta-button">
                    <Link to="/blogs">
                    Get Started
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Home;

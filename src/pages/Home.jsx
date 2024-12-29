import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <img 
                    className="hero-image" 
                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Programming setup" 
                />
                <div className="overlay">
                    <h1 className="hero-title">Start your Blog Today</h1>
                    <p className="hero-subtitle">Streamline your thoughts. Share your world.</p>
                </div>
            </div>

            {/* Intro Section */}
            <div className="intro-section">
                <h2>Welcome to BlueWave Blog</h2>
                <p>
                    BlueWave Blog is a platform built for creators to share, edit, and manage their blogs effortlessly. 
                    Engage with your audience and showcase your voice with simplicity and elegance.
                </p>
            </div>

            {/* Featured Blogs */}
            <div className="featured-section">
            <h2>Featured Blogs</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <h3>Web Development Tips</h3>
                        <p>10 actionable tips to enhance your web development skills in 2024.</p>
                    </div>
                    <div className="blog-card">
                        <h3>Design for Creators</h3>
                        <p>How to design visually stunning blogs that captivate readers.</p>
                    </div>
                    <div className="blog-card">
                        <h3>Web Development Tips</h3>
                        <p>10 actionable tips to enhance your web development skills in 2024.</p>
                    </div>
                    <div className="blog-card">
                        <h3>Web Development Tips</h3>
                        <p>10 actionable tips to enhance your web development skills in 2024.</p>
                    </div>
                    <div className="blog-card">
                        <h3>Web Development Tips</h3>
                        <p>10 actionable tips to enhance your web development skills in 2024.</p>
                    </div>
                    <div className="blog-card">
                        <h3>Web Development Tips</h3>
                        <p>10 actionable tips to enhance your web development skills in 2024.</p>
                    </div>
                    
                    <div className="blog-card">
                        <h3>Writing to Inspire</h3>
                        <p>Master storytelling techniques to create engaging blog content.</p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="cta-section">
                <h2>Start Your Blogging Journey</h2>
                <p>BlueWave Blog makes blogging simple and rewarding. Join us today!</p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default Home;
